Foundry VTT Phone Mini-Games Macro

A custom macro for Foundry Virtual Tabletop that emulates an in-game smartphone screen and lets your players launch several built-in mini-games directly inside the VTT.

Use it as diegetic “fantasy phone” entertainment, a loading-screen distraction, a weird artifact in the world, or just a fun toy for your table.

✨ Overview

This project is a single macro (or macro + assets, depending on how you package it) that opens a phone-like UI inside Foundry VTT.
From that screen, players can choose from several mini-games and play them without leaving the session:

🧙 Fantasy Retro Dodger – a pixel-style arcade where a wizard dodges incoming projectiles.

🚢 Battleship – a classic grid-based naval duel.

💣 Minesweeper – the traditional logic game about revealing safe tiles while avoiding hidden mines.

🧟‍♂️ Goblin Arena – an arcade survival mode inspired by Vampire Survivors, where you kite endless waves of goblins.

Everything runs inside Foundry using JavaScript and the client’s browser — no external servers, no additional applications.

🎮 Features

In-world phone screen
The macro opens a custom UI that visually imitates a smartphone / crystal communicator / magi-tech device. You can skin it to match your setting (fantasy, cyberpunk, modern, etc.).

Multiple mini-games in one macro
A simple game selection menu lets players pick any of the built-in games and switch between them.

Self-contained arcade
All logic lives in the macro. No system-specific rules, no external modules required (beyond Foundry itself).

Session-friendly
Great for:

Short breaks between scenes

“In-character” entertainment (a magic phone, a gnomish gadget, a cursed artifact, etc.)

Waiting for late players / AFK moments

Easily customizable
Since it’s a macro, you can open the code and:

Adjust difficulty

Tweak visuals and colors

Add or remove games

Hook into chat messages, sounds, or scene triggers if you want deeper integration

🕹 Included Games
1. Fantasy Retro Dodger

A simple arcade game:
You control a wizard who has to dodge incoming projectiles. Over time, the pace and density of projectiles can increase, turning it into a reflex challenge.

Typical features (depending on your implementation):

Player character with position & movement

Randomized or patterned projectiles

Increasing difficulty over time

Score / survival time tracking

Use it as:

A magical “training app” for apprentice mages

A mini-game you literally find installed on an in-world artifact

A fun way to pass time between combat encounters

2. Battleship

A grid-based naval combat puzzle inspired by the classic Battleship:

Hidden ships placed on a grid

The player calls out coordinates to try and hit them

Feedback for “hit”, “miss”, and sunk ships

This works well as:

A casual mini-game on a fantasy phone

A “pirate pastime” or naval officer hobby

A puzzle / gambling element in tavern scenes

3. Minesweeper

A classic Minesweeper clone adapted to the in-Foundry phone screen:

A field of hidden tiles

Some tiles contain mines

Numbers show how many mines are adjacent

The goal is to clear the field without clicking a mine

Great for:

Logic-puzzle–loving players

“Waiting room” mini-game while others roleplay

Representing some in-world hacking, disarming or divination mechanic

4. Goblin Arena (Vampire Survivors-style)

An arena survival mini-game inspired by Vampire Survivors:

You control a character in a small arena

Waves of goblins spawn and move toward you

You survive as long as possible, kiting enemies and dealing damage

Difficulty can ramp up over time with more enemies, faster speed, or stronger attacks

Use it as:

A “popular in-universe mobile game”

A meta-joke about goblins in your campaign

A quick action arcade break during downtime

📦 Installation

You can adjust this section to match how you distribute the project, but here’s a generic version:

Download the macro file

Copy the macro code from this repository (e.g., phone-minigames-macro.js).

Create a new macro in Foundry

Open your Foundry world.

Go to the Macros directory.

Click Create Macro.

Set the macro type to Script.

Paste the code into the macro’s command field.

Give it a name and an icon (phone icon recommended).

Save the macro

Drag the macro to a hotbar slot if you want quick access.

(Optional) GM-only or player access

Decide whether only the GM can trigger the phone, or if players should also have access.

Adjust permissions accordingly (right-click on the macro → Configure Permissions).

If you package this as a module later, you can replace these steps with standard “Install module → Import macro from compendium” instructions.

🚀 Usage

Run the macro

Click the macro in the hotbar.

A phone-like window should appear on the screen.

Select a game

Use the in-phone menu or app icons to choose:

Fantasy Retro Dodger

Battleship

Minesweeper

Goblin Arena

Play

Each game handles its own controls and UI.

Typically you’ll use mouse clicks and/or keyboard input.

The game runs entirely on the client side for the user who opened it.

Exit / switch games

Use the in-phone back button / menu button (depending on your UI) to:

Return to the main screen

Switch to another mini-game

Close the phone entirely

⚙️ Configuration & Customization

You can customize many aspects directly in the macro code:

Visual theme

Phone frame style (fantasy crystal, arcane tablet, modern smartphone, etc.)

Background colors, fonts, icons

Game difficulty

Projectile speed and spawn rate in the wizard dodger

Field size and number of ships in Battleship

Grid size and mine density in Minesweeper

Enemy spawn rate / health / speed in Goblin Arena

Hooks into the game

Optional chat messages like “📱 [Player] launches Goblin Arena on their arcane phone.”

Sounds when launching or finishing a game

Integration into items (e.g. clicking a magic item opens the phone macro)

Because this is a pure macro project, configuration is done by editing the code. You’re free to refactor it into a full module if you prefer a settings UI.

🧱 Technical Notes

Runs as a Foundry VTT macro (client-side script).

Uses Foundry’s browser environment (HTML/JS/CSS) to:

Render UI elements (phone frame, buttons, game canvas).

Manage simple game loops (timers, intervals, animation updates).

Handle user input (mouse / keyboard events).

There are no external dependencies beyond what Foundry’s client already provides.

🧭 Roadmap (Ideas)

You can adapt or erase this section, but here are some possible future directions:

Add sound effects and simple music per game.

Track high scores per player (stored in flags or a small dataset).

Additional mini-games (puzzle, platformer, simple card game, etc.).

System integration:

Use Goblin Arena results as a fun way to award inspiration / bennies.

Let the wizard dodger “unlock” in-world lore after certain milestones.

🤝 Contributing

If you’d like to:

Fix bugs

Improve performance

Add new mini-games

Refine the UI / UX

…feel free to open an issue or submit a pull request.
