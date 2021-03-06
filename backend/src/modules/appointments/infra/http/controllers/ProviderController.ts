import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';


class ProviderController {
   static async index(request: Request, response: Response): Promise<Response> 
   {
      const listProviders = container.resolve(ListProvidersService);
      const providers = await listProviders.run(
      { 
         user_id: request.user.id 
      });
      return response.json(classToClass(providers));
   }
}


export default ProviderController;
