Approach:
- Create a generic skeleton component that can have multiple variants and different animations. It can allow us to generate different skeleton configurations based on component structure or it can be directly used as a standalone loader on the standard page components.
- Segregating skeletons from the actual components has it pros and cons. It keeps the code clean, improves reusability and helps in creating versions. However, it also adds an overhead during the development.
- Skeleton Loaders can be shown according to the page structure while data is being retrieved from the server. Once the data is fetched, these skeletons can be replaced with the actual components.