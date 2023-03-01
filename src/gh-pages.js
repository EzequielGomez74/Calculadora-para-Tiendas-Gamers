var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/EzequielGomez74/Calculadora-para-Tiendas-Gamers', // Update to point to your repository  
        user: {
            name: 'EzeGomez74', // update to use your name
            email: 'ezequiel.canob@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)