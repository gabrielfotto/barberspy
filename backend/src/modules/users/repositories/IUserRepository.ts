import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';


export default interface IUserRepository {
   findById: (id: string) => Promise<User | undefined>;
   findByEmail: (email: string) => Promise<User | undefined>;
   findAllProviders: (data: IFindAllProvidersDTO) => Promise<User[]>;
   create: (data: ICreateUserDTO) => Promise<User>;
   save: (user: User) => Promise<User>;
}
