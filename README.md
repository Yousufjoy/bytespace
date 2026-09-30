Getting Started
---------------

1. Clone the repository

git clone https://github.com/Yousufjoy/bytespace.git

2. Go to the project directory

cd bytespace

3. Install dependencies

bun install

4. Create an environment file

Create a `.env.local` file in the root of the project and add:

NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET=4f3d8c9a4e2b6c7d8f9e0a4c4c3d4e5g6g7h8i9j0k2l2m3n4o5p6j7r8s9t0u1v
MONGODB_URI=mongodb+srv://bytspace:xulULEqEkBXEROFK@cluster0.xqmekpt.mongodb.net/?appName=Cluster0

5. Run the development server

bun dev

6. Open the application

http://localhost:3000


Features
--------

- Online course browsing
- Individual course pages
- User registration
- User login
- Authentication with NextAuth
- MongoDB database integration
- Responsive UI
