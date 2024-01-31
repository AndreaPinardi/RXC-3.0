local environment setup

- run "npm install" in the root folder
- cd host > run "npm install"
- cd ..
- cd remote > run "npm install"
- cd ..
- "npm run start"

host: localhost:8080
remote localhost:8081

// generate JSON schema of components for BO

cd remote
npx @react-docgen/cli --pretty -o components.json ./pages/components/\*_/_.tsx
