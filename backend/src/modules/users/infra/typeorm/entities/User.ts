import { 
   Entity, 
   Column, 
   PrimaryGeneratedColumn, 
   CreateDateColumn, 
   UpdateDateColumn 
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';


@Entity('users')
class User 
{
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   @Exclude()
   password: string;

   @Column({ default: false })
   is_provider: boolean;

   @Column({ nullable: true })
   avatar: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;


   @Expose({ name: 'avatar_url' })
   getAvatarUrl(): string | undefined {
      return this.avatar && `${process.env.APP_API_URL}/files/${this.avatar}`
   }
}


export default User;
