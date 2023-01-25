import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Posts} from './post.entities'

@Entity()

export class Users{
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({
        type : 'character varying',
        length:64,
        nullable:false
    })
    name:string;

    @Column({
        type:'int',
        nullable:false
    })
    age:number

    @OneToMany(() => Posts, post => post.user)
    posts: Posts[]
}