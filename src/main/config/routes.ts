import { Router } from 'express';
// controllers
import { AddressController } from '../../presentation/controllers/AddressController';
// routes instance
const router = Router();

router.get('/search/:code', AddressController.search);

export { router as Routes };
