import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Users} from './user.entities'

@Entity()

export class Posts{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({
        type : 'character varying',
        length:64,
        nullable:false
    })
    title:string;

    @Column({
       type:"uuid",
       nullable:false
    })
    user_id: string

   @ManyToMany(() => Users, user => user.posts)
   user: Users
}