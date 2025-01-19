/* eslint-disable @typescript-eslint/no-explicit-any */
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prismaClient } from "./prisma";
import { User } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({
      session,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      token,
      user,
    }: {
      session: any;
      token: any;
      user: User;
    }) {
      if (user) {
        session.user = { ...session.user, id: user.id } as {
          id: string;
          name: string;
          email: string;
        };
      }
      return session;
    },
  },
};
