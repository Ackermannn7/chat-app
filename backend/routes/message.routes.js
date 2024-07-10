import e from 'express';
import { sendMessage, getMessages } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = e.Router();

router.post('/send/:id', protectRoute, sendMessage);
router.get('/:id', protectRoute, getMessages);

export default router;
