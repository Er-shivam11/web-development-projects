# Web Scraping Script

This Python script is designed for web scraping data from a specified URL. It utilizes the `requests` library to make HTTP requests and `BeautifulSoup` for HTML parsing.

## How the Script Works

The script performs the following steps:

1. Sends an HTTP GET request to the specified URL (`https://www.nseindia.com/market-data/live-equity-market` in this case).
2. Retrieves the HTML content from the response.
3. Uses BeautifulSoup to parse the HTML content.
4. Finds all anchor (`<a>`) tags in the HTML.
5. Iterates over the links and prints their text and href attributes.

## Features

- **Customizable URL:** You can replace the `url` variable with the URL of the website you want to scrape.

## Technologies Used

The script is built using:

- Python 3.6+
- [Requests](https://docs.python-requests.org/en/latest/) library for making HTTP requests
- [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/) library for HTML parsing

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/web-scraping-script.git
   cd web-scraping-script
Install the necessary dependencies:

2.
pip install requests beautifulsoup4
Run the script:

python web_scraping_script.py
