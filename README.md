# My Travel Journal (React Project)

This is a simple React application that displays a personal travel journal.  
Each entry shows the country, title, dates, description, and a link to Google Maps, along with a location image.  

The project demonstrates React components, props, mapping through data arrays, and styling with TailwindCSS.

## Features

- Reusable React Components  
  - A Header component for the app title.  
  - A JournarEntry component for each travel entry.  
  - Components are reusable, making the code clean and modular.

- Dynamic Rendering with map()  
  - Travel entries are stored in data.js as an array of objects.  
  - The App component maps through the data and generates a list of JournarEntry components dynamically.

- TailwindCSS Styling  
  - TailwindCSS is used for utility-first styling.  
  - Classes like flex, w-2/5, gap-6, rounded-md, and text-gray-600 create a clean and responsive design.

- External Links  
  - Each entry includes a link to Google Maps for the location.  
  - Opens in a new tab (target="_blank").

## Technologies Used

- React – Component-based UI library for building the interface.  
- JavaScript (ES6+) – Logic and JSX syntax for React.  
- TailwindCSS – Utility-first CSS framework for styling.  
- Vite – Fast development build tool (if used in your setup).  

## Project Structure
[Live Demo](https://traveljournalbycg.netlify.app/)