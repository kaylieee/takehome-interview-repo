# empirica-dev

Empirica Development Repository for Experimentation.

For installation instructions, check out [this Google Document](https://docs.google.com/document/d/1h0MvtqK9ss_Yw3fcofB_j0B_T7V7GodYdjEjKUqiPws/edit?usp=sharing).

For issues to start contributing to, take a look at the open [Issues](https://github.com/Digital-Information-Research-Lab/empirica-dev/issues).

For details on our progress, check out the [Experiment Roadmap](https://github.com/orgs/Digital-Information-Research-Lab/projects/2) (you will need access if you can't view this, since it's private. Ping [SwapneelM](https://github.com/swapneelm))

## Feature planning and design

In planning the warrants feature, I first began by thinking about how users would need to interact with the feature. The feature can generally be broken down into two types of interaction, setting a warrant as a producer and challenging the warrant as a consumer or competitor. Now, as the game can be played with only one player, the warrants feature will behave differently between single player and multiplayer modes. So, I broke the feature down between all possible methods of play, focusing on the role a player would have in the marketplace and how interaction with warrants and behavior of warrants would change in different roles and marketplace environments. As the consumer role has not been developed, I had to make some assumptions as to how the marketplace would function with the inclusion of consumers. These are as follows, consumers will be given some "money" to spend in the marketplace, consumers will be shown an array of product advertisements with producers and prices and will be able to select which product to purchase from said advertisements, consumers will then "purchase" the product and will be able to see the actual quality of the product purchased.

- Producer
  - Player will have the ability to set a warrant for a chosen amount and see how the warrant will affect advertising
  - Player will be able to see result of warrant in results screen
  - Single Player
    - No other players are available, whether or not a warrant is challenged will be decided on chance, resolution of warrant is based on player's decision making
  - Multiplayer
    - Player will have the ability to see the marketplace and make challenges on competitor warrants
    - Player will be able to see result of challenges in results screen
    - Whether or not a warrant is challenged will be based on other player's decision making
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

In order to set a warrant, a producer has to put some amount of money down translating into some amount of extra advertisements shown. In a singleplayer environment, I imagine this might look like 1 dollar per 2 extra people advertised to or some other rate between dollars and people. In a multiplayer environment however, we have a smaller pool of real consumers so advertising to more consumers could mean different things. As such, the exact implementation of multiplayer warrant functionality will have to depend on how the consumer role and marketplace will be implemented. Once a warrant is decided on and set by a producer, the warrant price will be subtracted from their score. If the warrant is challenged successfully, all advertisements are pulled and the producer loses the money spent on production and the warrant. Otherwise, the producer potentially makes money on extra sales from the extra advertisements. Since producers can not advertise boundlessly, there should also be some limit on how big of a warrant a producer can place.

In order to challenge a warrant, a competitor or consumer must put some amount of money down. Upon resolution of the challenge, if successful, the challenger receives the money they placed down back and the money the producer used to place the warrant as a reward. If unsuccessful, the challenger loses the money they placed on the challenge.
