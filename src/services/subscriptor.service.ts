import prisma from "@/lib/prisma";
import { createSubscriber, updateSubscriber } from "@/schema";
import bcrypt from "bcryptjs";


const fields = {
    id: true,
    email: true,
    username: true,
    name: true,
    surname: true,
    phone_number: true,
    plan: true,
    created_at: true,
    updated_at: true,
    start_date: true,
    end_date: true,
    employeeUsers: true,
    companyData: true,
}


export const subscriberService = {
    async getAll() {
        return await prisma.subscriberAccount.findMany({
            where: { isDeleted: false },
            select: {
                id: true,
                email: true,
                username: true,
                surname: true,
                phone_number: true,
                plan: true,
                employeeUsers: true,
                companyData: true,

            }
        });
    },


    /* async getByEmail(email: string) {
        return await prisma.subscriberAccount.findUnique({ where: { email } });
    },


    async getByUsername(username: string) {
        return await prisma.subscriberAccount.findUnique({ where: { username } });
    }, */


    async getById(id: string) {
        const user = await prisma.subscriberAccount.findUnique({
            where: { id },
            select: {
                ...fields,
                isDeleted: true,
            }
        });
        if (!user) return user;
        if (user?.isDeleted) return null
        if ("isDeleted" in user) {
            const { isDeleted, ...rest } = user;
            return rest;
        }
        return user;
    },


    async createSubs(data: createSubscriber) {
        const parseData = createSubscriber.parse(data);
        const hashedPassword = await bcrypt.hash(parseData.password, 10);
        return prisma.subscriberAccount.create({
            data: {
                ...parseData,
                password: hashedPassword
            },
            select: fields
        });
    },


    async updateSubs(
        id: string,
        data: updateSubscriber
    ) {
        const parseData = updateSubscriber.parse(data);
        const user = await prisma.subscriberAccount.findUnique({
            where: { id },
            select: { isDeleted: true }
        });
        if (!user || user.isDeleted) {
            return null;
        }
        return await prisma.subscriberAccount.update({
            where: { id },
            data: {
                ...parseData
            },
            select: {
                id: true,
                email: true,
                username: true,
                name: true,
                surname: true,
                phone_number: true,
                plan: true,
                created_at: true,
                updated_at: true,
                start_date: true,
                end_date: true,
                employeeUsers: true,
                companyData: true,
            }
        });
    },


    async deleteSubs(id: string) {
        const user = await prisma.subscriberAccount.findUnique({
            where: { id },
            select: { isDeleted: true }
        });
        if (!user || user.isDeleted) {
            return null;
        }
        return prisma.subscriberAccount.update({
            where: { id },
            data: {
                isDeleted: true
            }
        });
    }
}

