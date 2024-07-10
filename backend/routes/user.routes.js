import e from 'express';

import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/user.contoller.js';
const router = e.Router();

router.get('/', protectRoute, getUsersForSidebar);

export default router;
