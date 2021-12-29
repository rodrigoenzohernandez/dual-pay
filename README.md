# Dual-Pay Hackaton 
We wanted to find an alternative to be able to access the money conversion from facebank to our argentinian account in a faster and more intuitive way.
## First Steps 📋

1. General Idea 💡
    - Choosed git methodologies.
    - Design Mock-Ups
    - Landing page styles
    - Responsive Design
2. Creating the logic approach 🛠️
    - Design algorithm to get the estimate USD and Pesos
    - Design algorithm to estimate nominals quantity
3. Coding ⌨️
    - Create files structure
    - Landing page HTML structure
    - Set the styles 
    - Create the functions
    - Connect the front to the functions
    - Refactor
## Functions ⚙️🔧
  
### usdToNominals(amount)
Return quantity of nominals that you will have on Balanz.  
**amount** The amount on facebank that you want to transfer to Balanz.  

### nominalsToPesosOrUsd(nominals, currencyToRecive)
Return the amount converted in pesos or usd.  
**nominals** Bonds Units.  
**currencyToRecive** for example usd/pesos

## Architecture

![Architecture](src/public/readme-imgs/dual-pay-architecture.png?raw=true "Architecture")


## Upcoming Improvements 🚀
1. Calculator to know how many dollars is the percentage of salary that you want to receive.
2. API to get the bond prices.
3. Add a header and footer.
4. Deploy.




