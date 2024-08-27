
# Weather App

This is a weather application built using **React** and **Tailwind CSS**. It allows users to check current weather conditions for different cities using data fetched from a weather API. The project includes various components for a smooth user experience, such as a loading spinner, navigation bar, and informational pages like About Us and Contact Us.

## Features

- **Weather Fetching**: Get real-time weather information using an API.
- **Spinner**: A loading spinner is displayed while fetching data.
- **Responsive Design**: Fully responsive user interface, thanks to Tailwind CSS.
- **Navigation**: Includes navigation for switching between different sections of the app.
- **About Us and Contact Us**: Informational pages for user interaction.
- **Footer**: A simple footer for additional links or credits.

## Folder Structure

```plaintext
weather-app-react/
├── src/
│   ├── component/
│   │   ├── AboutUs.jsx
│   │   ├── Bar.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.module.css
│   │   ├── Spinner.jsx
│   │   ├── Weather.jsx
│   └── ...
└── ...
```

- **AboutUs.jsx**: Displays information about the app or team.
- **Bar.jsx**: A component likely used for displaying data (e.g., progress bars or charts).
- **ContactUs.jsx**: A simple contact form for user inquiries.
- **Footer.jsx**: A footer component.
- **Navbar.jsx**: The navigation bar, includes links to different sections.
- **Spinner.jsx**: Displays a loading spinner while the weather data is being fetched.
- **Weather.jsx**: Main component that displays the weather information.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aqibyameen/weather-app-react.git
   cd weather-app-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser.

## Deployment

The app is deployed on GitHub Pages. Visit the live app at:
Weather App: https://aqibyameen.github.io/weather-app-react/)

## Usage

- Enter the name of a city to get current weather data.
- If the weather data is being fetched, a loading spinner will be displayed.
- Navigate to the **About Us** and **Contact Us** pages using the navigation bar.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Weather API**: Fetches real-time weather data.
- **GitHub Pages**: For deployment of the app.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- API powered by [WeatherAPI](https://www.weatherapi.com/)
- React documentation for guidance.
