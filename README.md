# News Application

This project is a **Next.js** application that allows users to browse and interact with news articles. It includes features such as searching, sorting, and bookmarking ,pagination news items. A **JSON Server** is used to simulate a backend for managing news data.

## Features
- **Display News**: Browse news articles with a clean and responsive interface.
- **Search News**: Search for articles using keywords.
- **Sort News**: 
  - Sort articles by date (Old to New or New to Old).
- **Bookmark Articles**: Save your favorite articles to a personalized bookmark list.
- **Pagination**:To smoothly Navigate to diffrent pages.

## Pages
1. **Home**: Displays the latest news articles.
2. **News**: Detailed view of all available news items.
3. **About**: Information about the project.
4. **Bookmark**: View and manage your saved articles.

---

## Installation

### Prerequisites
- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher recommended)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm run start:all
   ```

## Scripts
Here are the key scripts defined in the project:

- **dev**: Starts the Next.js development server with TurboPack.
- **server**: Starts the JSON Server to serve news data from `utils/db.json`.
- **start:all**: Runs both the Next.js app and JSON Server concurrently using the `concurrently` package.

## Folder Structure
- **pages**: Contains the main routes of the application:
  - `index.js`: Home page.
  - `news.js`: News page.
  - `about.js`: About page.
  - `bookmark.js`: Bookmark page.
- **utils/db.json**: Mock database file for JSON Server.

## Usage

### Viewing News:
- Navigate to the home page or the news page to view articles.
- Use the search bar to find articles by keywords.

### Sorting News:
- Use the sorting controls to organize articles by date (Oldest to Newest or vice versa).

### Bookmarking:
- Click the "Bookmark" button on an article to save it.
- View your saved articles on the Bookmark page.

## Dependencies
- **Next.js**: Framework for React applications.
- **Tailwind CSS**: For styling the application.
- **JSON Server**: To simulate a backend server.
- **Concurrently**: To run multiple scripts simultaneously.

## Future Enhancements
- Integration with a real backend API.
- Adding user authentication for personalized experiences.
- Implementing pagination for better navigation.

## License
This project is licensed under the MIT License.