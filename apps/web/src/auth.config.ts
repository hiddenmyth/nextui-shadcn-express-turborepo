import Google from "next-auth/providers/google";
import NextAuth, { type NextAuthConfig } from "next-auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET || "secret",
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  debug: true,
} satisfies NextAuthConfig;
