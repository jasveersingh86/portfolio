tailwind.config={
    theme:{
        extend:{
            grideTemplateColumns:{
                'auto': 'repeat(auto-fit,minmax(200px 1-fr))'
            },
            
            fontfamily:{
                outfit:["Outfit", "sans-serif"],
                Ovo:["Ovo", "serif"]
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darkTheme:'#11001F',
                skyHover:'#073B4C'

            }
           
        }
      
         
    },
    darkMode:'selector'
}