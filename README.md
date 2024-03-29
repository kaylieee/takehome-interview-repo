# empirica-dev

## Feature planning and design

In planning the warrants feature, I first began by thinking about how users would need to interact with the feature. The feature can generally be broken down into two types of interaction, setting a warrant as a producer and challenging the warrant as a consumer or competitor. Now, as the game can be played with only one player, the warrants feature will behave differently between single player and multiplayer modes. So, I broke the feature down between all possible methods of play, focusing on the role a player would have in the marketplace and how interaction with warrants and behavior of warrants would change in different roles and marketplace environments. As the consumer role has not been developed, I had to make some assumptions as to how the marketplace would function with the inclusion of consumers. These are as follows, consumers will be given some "money" to spend in the marketplace, consumers will be shown an array of product advertisements with producers and prices and will be able to select which product to purchase from said advertisements, consumers will then "purchase" the product and will be able to see the actual quality of the product purchased.

- Producer
  - Player will have the ability to set a warrant for a chosen amount and see how the warrant will affect advertising
  - Player will be able to see result of warrant in results screen
  - Single Player
    - No other players are available, whether or not a warrant is challenged will be decided on chance, resolution of warrant is based on player's decision making
    * The higher the warrant, the more people it is shown to, so the likelihood of a challenge increases
  - Multiplayer
    - Player will have the ability to see the marketplace and make challenges on competitor warrants
    - Player will be able to see result of challenges in results screen
    - Whether or not a warrant is challenged will be based on other players' decision making
    - Resolution of challenges placed will be based on competitor's decision making
- Consumer
  - Player will be shown an array of product advertisements with the ability to challenge a warrant on an advertisement if one exists
  - Player will be able to see result of challenge in results screen
  - Single Player
    - No other players are available, each product advertised has randomly chosen product quality, advertised quality, price
    - If player decides to challenge a warrant, resolution of warrant is determined using these randomly chosen attributes of the product
  - Multiplayer
    - Each advertisement and its attributes will be those set by producer players in the marketplace
    - Resolution of challenges placed will be based on producer's decision making

Now that the interactions and general behavior of the warrants feature has been mapped out, the other aspect I wanted to consider here was how to define setting or challenging a warrant and the effect warrants would have on a player's score.

In order to set a warrant, a producer has to put some amount of money down translating into some amount of extra advertisements shown. In a single player environment, I imagine this might look like 1 dollar per 2 extra people advertised to or some other rate between dollars and people. In a multiplayer environment however, we have a smaller pool of real consumers so advertising to more consumers could mean different things. As such, the exact implementation of multiplayer warrant functionality will have to depend on how the consumer role and marketplace will be implemented. One idea could be showing each ad to a default percentage of consumers, say 10%, with a warrant increasing the percentage of consumers an ad is shown to. Once a warrant is decided on and set by a producer, the warrant price will be subtracted from their score. If the warrant is challenged successfully, all advertisements are pulled and the producer loses the money spent on production and the warrant. Otherwise, the producer potentially makes money on extra sales from the extra advertisements. Since producers can not advertise boundlessly, there should also be some limit on how big of a warrant a producer can place. In future iterations, we could consider implementing a false advertising fine for producers whose warrants are successfully challenged.

In order to challenge a warrant, a competitor or consumer must put some amount of money down. Upon resolution of the challenge, if successful, the challenger receives the money they placed down back and the money the producer used to place the warrant as a reward. If unsuccessful, the challenger loses the money they placed on the challenge.

## Real-world parallels and trade-offs

The warrants feature mimics real-world marketplace dynamics as it introduces the aspect of risk and competition into the game. In a single player environment, this dynamic is less complex as, in both consumer and producer roles, the outcome of warrants placed and challenges made is entirely decided on chance. This still does add some level of risk to the game as consumers and producers now have the option to put some money down for the chance at making more money. Especially in the producer role, where a higher warrant means a higher chance of a challenge, we can begin to see how a player's risk tolerance may affect how they play the game. Previously with the way the game is set up, any money invested by players into production is guaranteed a return of at least 1 dollar with expected returns being much higher than that. With the addition of warrants into the game, the player now puts themselves in a position to either make much more money or no money at all on their warrant, similar to the uncertainty behind making investments in the real-world.

In a multiplayer environment, the warrants feature even further elevates gameplay. Like in the single player environment, the players are given the option to take on some risk to potentially earn more money. However, the risk factor is tweaked a little as warrant challenges are no longer based on randomness. Now, there are other real players that will decide whether warrants are challenged or not. This introduces the idea of trust into the game. Consumers can see which advertisements belong to which producers and will be able to see if the advertised product matches up with the actual product. As such, producers who often false advertise may find themselves losing trust among consumers with their warrants getting challenged more. This encourages producers to build trust among consumers, similar to how companies in the real-world seek to maintain their customer bases. Additionally, since warrants can be challenged by competitors, there is another layer of accountability amongst producers. Although consumers may not care as much about false advertising, competing producers are incentivized to bring other producers down and may be looking to expose dishonest practices to gain a competitive edge. As the game progresses, players will have to strategize and assess their own market position to make informed decisions on how to maximize profit.

The biggest trade-off I would want to consider in implementing the warrants feature is how much flexibility players have when setting a warrant. Although in real-world marketplaces companies can theoretically spend as much money as they want on advertising to reach more consumers, this may not be realistic in our stimulated marketplace. Giving players the ability to set limitless warrants would leave the feature open to abuse and too complex for users to understand exactly what placing a warrant does. Additionally, allowing users to arbitrarily set values would also make understanding how much money is tied to how much of an increase in advertisements harder. This information must be clearly communicated to players so that they are able to accurately make decisions on how they want to spend their money and how much of a risk they are undertaking.

I also would want to consider the difference in implementation between single and multiplayer environments. As discussed previously, single player producers may be able to advertise to hundreds of extra people but we likely will not have that many users playing at the same time. This may drastically change how the warrants feature is implemented on the back-end and the limitations a user would have in setting a warrant on the front-end. To make it easier for players to transition between playing in single player or multiplayer, I would want to design the warrants feature for adaptability between the modes to maintain consistency and cohesiveness and avoid confusion for players.

## Advertisements redesign - Figma mockup
![Advertisements1](https://github.com/kaylieee/takehome-interview-repo/assets/50653231/b1871631-589a-4f4c-b194-6df44e0cce1c) 
![Advertisements2](https://github.com/kaylieee/takehome-interview-repo/assets/50653231/bb2eaa69-31ce-4aaf-b4bb-ab6d525ca9e0)
![Advertisements3](https://github.com/kaylieee/takehome-interview-repo/assets/50653231/13a7587e-2a10-4eb8-93df-25a7e737bc6a) 
![Advertisements4](https://github.com/kaylieee/takehome-interview-repo/assets/50653231/00532fc8-750d-4832-bee6-9988afc72bc3)
![Advertisements5](https://github.com/kaylieee/takehome-interview-repo/assets/50653231/c9f884f6-d8d8-4969-876e-c6c24f765134)




