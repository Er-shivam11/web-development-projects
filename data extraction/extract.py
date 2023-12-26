import requests
from bs4 import BeautifulSoup
url = 'https://www.nseindia.com/market-data/live-equity-market'  # Replace with the URL of the website you want to scrape
response = requests.get(url)
html_content = response.content
soup = BeautifulSoup(html_content, 'html.parser')
links = soup.find_all('a')

# Iterate over the links and print their text and href attributes
for link in links:
    print(link.text, link['href'])
