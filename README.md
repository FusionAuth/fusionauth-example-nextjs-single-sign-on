# Implementing authentication in Next.js with FusionAuth

This is a simple [Next.js](https://nextjs.org/) application to demonstrate how to implement authentication using the [FusionAuth provider for NextAuth.js](https://next-auth.js.org/providers/fusionauth).

## Getting Started

1. Go through the [5-Minute Guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide) to set up your FusionAuth application.
1. Clone this repository:
    ```shell
    $ git@github.com:FusionAuth/fusionauth-example-nextjs-single-sign-on.git
    ```
1. Change into the directory.
1. Copy `.env.local.dist` to `.env.local` and change the necessary values there.
1. Run `npm install`
1. Run the development server:
    ```shell
    $ npm run dev
    ```
1. Browse to [localhost:3000](http://localhost:3000) and click the **Log in** button in the top right corner of the page.
    - You'll be taken to the FusionAuth login screen. Log in with the user credentials you created during the [5-Minute Guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide) and you will be redirected back to your Next.js application with your email address displayed. 
