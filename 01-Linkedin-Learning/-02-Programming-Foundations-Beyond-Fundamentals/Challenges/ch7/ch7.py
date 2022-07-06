def plant_recommendation(care):
   # if care = 'low':-->syntax error
    if care == 'low'
        print('aloe')
    elif care == 'medium':
        print('pothos')
    #elif care == 'medium': --> logical error
    elif care == 'high':
        print('orchid')

plant_rec('low')
plant_recommendation('medium')
plant_recommendation('high')

