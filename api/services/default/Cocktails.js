const cocktails = [
  {
    name: 'Caipirinha',
    description: 'The Caipirinha is Brazil national cocktail made with cachaça, ice, sugar, and lime. It is the drink most commonly associated with cachaça.',
    data: {
      baseSpirit: 'Cachaça',
      served: 'On the rocks: poured over ice',
      drinkware: 'Old fashioned glass',
      ingredients: '50 ml (1⅔ fl oz) cachaça, ½ Lime cut into 4 wedges (or tahiti lime, but not lemon), 2 teaspoons crystal or refined sugar',
      preparation: 'Place lime and sugar into old fashioned glass and muddle (mash the two ingredients together using a muddler or a wooden spoon). Fill the glass with crushed ice and add the Cachaça.',
      notes: 'A wide variety of fresh fruits can be used in place of lime. In the absence of cachaça, vodka can be used, making a caipiroska. If rum is used instead of cachaça it is called a caipiríssima, while the use of sake makes it a sakerinha.'
    }
  },
  {
    name: 'Batida',
    description: 'Batida is a Brazilian cocktail made with the national alcoholic drink cachaça. In Portuguese, batida means shaken or milkshake. It is made with cachaça, fruit juice (or coconut milk), and sugar. It can be blended or shaken with ice.',
    data: {
      baseSpirit: 'Cachaça',
      served: 'On the rocks: poured over ice',
      drinkware: '',
      ingredients: '2 parts cachaça, 1 part fruit juice, 1 tbsp sugar',
      preparation: 'Mix and pour into chilled glass.'
    }
  },
  {
    name: 'Caju amigo',
    description: "Caju amigo, also known as cajuzinho (little cashew), is a Brazilian drink made of cachaça and cashew juice. In some places, a slice of cashew is put in the drinker's mouth with a little bit of salt, chewed without swallowing, and a shot of cachaça is thrown back straight- swallowing the fruit and the drink at the same time.",
    data: {
      baseSpirit: 'Cachaça',
      served: 'Neat: undiluted and without ice',
      drinkware: 'Shot glass',
      ingredients: '1 part cachaça, 1 slice of cashew, or 1 part cashew juice',
      preparation: 'The slice is placed on the tongue and chased by the shot of cachaça. Or the two ingredients are mixed in a shot glass and served straight.'
    }
  },
  {
    name: 'Quentão',
    description: 'Quentão, which means "very hot" or "big hot one", is a hot Brazilian drink made of cachaça and spices. It is often served during the celebrations known as Festas Juninas. The sugar is first caramelized with spices (whole cloves, cinnamon sticks and ginger chunks) and citrus peels (orange and lime). This mixture is then boiled with water for 10 minutes. The cachaça is added and boiled for another 5 minutes.',
    data: {
      baseSpirit: 'Wine, Cachaça',
      served: 'Hot',
      drinkware: 'Mug',
      ingredients: '1 part cachaça or red wine, 1 part water, Sugar to taste, Peel of two oranges and a lime, Cloves, cinnamon and ginger to taste',
      preparation: 'caramelize the sugar with the spices and peels, then add the liquids. Boil for a few minutes then serve hot.'
    }
  },
  {
    name: 'Leite de onça',
    description: "Leite de onça (Jaguar milk) is a cold Brazilian drink made of cachaça and condensed milk. It is very sweet and has a very suave scent that evokes the homely atmosphere of a Festa Junina. It is not easy to replace the ingredients and achieve a similar result because its taste is very peculiar.",
    data: {
      baseSpirit: 'Cachaça',
      served: 'Neat: undiluted and without ice',
      drinkware: 'Mug',
      ingredients: '1 part cachaça, 1 part milk, 1 part cocoa liqueur, 1/2 part of condensed milk',
      preparation: "mix the condensed milk and the milk until they blend together. Add cachaça and let it rest. Add cocoa licor when it's ready to serve"
    }
  },
  {
    name: 'Macunaíma',
    description: "",
    data: {
      baseSpirit: 'Cachaça',
      served: 'Straight up: chilled, without ice',
      drinkware: 'Old fashioned glass',
      ingredients: '45 ml (1.5 fl oz) cachaça, 25 ml (0.85 fl oz) simple syrup, 20 ml (0.67 fl oz) tahiti lime juice, 7 ml (0.24 fl oz) Fernet-Branca',
      preparation: 'Shake and strain into an Americano glass'
    }
  },
  {
    name: 'Royce',
    description: "Royce is an American cocktail made with the Brazilian national spirit cachaça. This cocktail was named in honor of Royce Gracie, a great Brazilian jiu-jitsu fighter.",
    data: {
      baseSpirit: 'Cachaça',
      served: 'rocks x',
      drinkware: 'Zombie glass',
      ingredients: '2 parts cachaça, 1 slice of each fresh orange, lemon and lime, 1 ounce of guava juice, 1 tbsp sugar',
      preparation: 'In a mixing glass, mix sugar and fruit slices and press to juice fruit, add ice, guava juice and cachaça, mix again - pour into tall glass.'
    }
  },
  {
    name: 'Sake Bomb',
    description: "The sake bomb or sake bomber is a beer cocktail made by pouring sake into a shot glass and dropping it into a glass of beer.",
    data: {
      baseSpirit: 'Beer, Sake',
      served: 'Neat: undiluted and without ice',
      drinkware: 'A pint glass and a shot glass.',
      ingredients: '1 pint (~16 parts) beer, 1 shot (1.5 parts) sake',
      preparation: "The shot of sake is dropped into the beer, causing it to fizz violently. The drink should then be consumed immediately."
    }
  },
  {
    name: 'Tamagozake',
    description: "Tamagozake is a traditional home remedy for the common cold in Japan, however there is no medical proof of its efficacy. Even though it is an alcoholic drink, it is sometimes given as a cold remedy to children as well as adults, much as hot toddies are used in Western countries.",
    data: {
      baseSpirit: 'Sake',
      served: 'Hot',
      drinkware: '',
      ingredients: 'One raw egg (or egg yolk only), 3/4 cup (200 cc) sake, Honey or sugar to taste',
      preparation: "Whisk the raw egg yolk and honey/sugar into 3/4 cup hot sake (hot enough to lightly cook the egg – 1:30 in the microwave).",
      notes: "An alternative preparation method is to heat the sake/egg/honey mixture together, while whisking occasionally. Be careful to stop cooking before it turns into scrambled eggs."
    }
  },
  {
    name: '',
    description: "",
    data: {
      baseSpirit: '',
      served: '',
      drinkware: '',
      ingredients: '',
      preparation: "",
      notes: ""
    }
  },
]

