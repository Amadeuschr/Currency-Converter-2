 // the function to fetch and display stock price
    function fetchStockPrice(symbol) {
      const apiKey = 'RNHBKYTYV62OO8ZX';
      const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
      
      // Make an HTTP request to the Alpha Vantage API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Extract the stock price from the API response
          const stockPrice = parseFloat(data['Global Quote']['05. price']).toFixed(2);
          
          // Display the stock price
          document.getElementById('stockPrice').textContent = `Stock Price for ${symbol}: $${stockPrice}`;
        })
        .catch(error => {
          console.log('Error fetching stock price:', error);
        });
    }

    // Add event listener to the search button
    document.getElementById('searchButton').addEventListener('click', () => {
      const symbol = document.getElementById('symbolInput').value.toUpperCase();
      if (symbol) {
        fetchStockPrice(symbol);
      } else {
        alert('Please enter a valid stock symbol.');
      }
    });