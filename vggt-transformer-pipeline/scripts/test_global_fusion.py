#!/usr/bin/env python3
import unittest

import numpy as np

from reconstruct import make_hybrid_chunks, register_group_ground


class GlobalFusionTests(unittest.TestCase):
    def test_hybrid_uses_video_for_motion_and_rig_for_static_agent(self):
        names = [f"t{i:06d}_a1_c1.jpeg" for i in range(4)]
        names += [f"t{i:06d}_a3_c{camera}.jpeg" for i in range(4) for camera in (1, 2)]
        centers = {name: np.array([index * 0.1, 0.0, 0.0]) for index, name in enumerate(names[:4])}
        for name in names[4:]:
            camera = 1 if "_c1" in name else 2
            centers[name] = np.array([float(camera), 2.0, 1.0])
        chunks = make_hybrid_chunks(names, centers, 1, 4, 0, 0.01)
        self.assertIn(names[:4], chunks)
        rig_chunks = [chunk for chunk in chunks if "_a3_" in chunk[0]]
        self.assertEqual(len(rig_chunks), 1)
        self.assertEqual(len(rig_chunks[0]), 2)

    def test_ground_registration_collapses_two_levels(self):
        points = np.array([[0, 0, 0.0], [1, 0, 0.0], [0, 1, 0.1], [1, 1, 0.1]], dtype=float)
        sources = np.array([0, 0, 1, 1])
        corrected, shifts, target = register_group_ground(points, sources, {0: 0.0, 1: 0.1}, 0.2)
        self.assertAlmostEqual(target, 0.05)
        self.assertAlmostEqual(shifts[0], 0.05)
        self.assertAlmostEqual(shifts[1], -0.05)
        np.testing.assert_allclose(corrected[:, 2], 0.05)

    def test_ground_registration_is_bounded(self):
        points = np.array([[0, 0, 0.0], [0, 0, 1.0]])
        corrected, shifts, _ = register_group_ground(points, np.array([0, 1]), {0: 0.0, 1: 1.0}, 0.1)
        self.assertEqual(shifts, {0: 0.1, 1: -0.1})
        np.testing.assert_allclose(corrected[:, 2], [0.1, 0.9])


if __name__ == "__main__":
    unittest.main()
