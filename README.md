# 🛠️ P@ssword For Dummies

**Congratulations!** You've just found _yet another_ password generator. Because you know, there's never enough ways to create passwords you'll forget immediately, right?

## Features (because apparently, we need to list them)

- **Uppercase Letters** – Because shouting your password in caps just feels right.
- **Lowercase Letters** – For when you're feeling modest.
- **Numbers** – Because "password123" is pure genius.
- **Symbols** – Make your life harder with these bad boys: `!@#$%^&*()_+=`.

## Demo (Because you definitely need a demo to understand a password generator)

1. Move a slider. Watch the number change. Magic.
2. Click checkboxes. Your password will now have stuff you clicked on. Revolutionary.
3. Click "Copy." Congratulations, you now have a password. What an achievement! 🎉

## Installation (Yawn)

```
git clone https://github.com/adhikareeprayush/Password-For-Dummies.git
cd Password-For-Dummies
npm install
npm start
```

Boom, it's running.

## Usage

1. Adjust the **length** of your password because size matters.
2. Pick if you want **uppercase**, **lowercase**, **numbers**, or **symbols**. Or not. Who cares.
3. Hit "Copy." Now go paste it somewhere and forget about it until you need to reset it again in a month.

## Contributing

Feel free to contribute, but honestly, it's just a password generator. Not sure what groundbreaking features you think it needs. Maybe add support for emojis or something. 🥳

## License

MIT. Because why not?

---

## React Hooks: What They Do, and Why You Should Care (or Pretend to)

### `useState`

**What it does**: Lets you manage the local state inside your component. For example, it lets you remember how long you want your password to be or if you want numbers or symbols in it.

**Where it’s used**:

- `length`: Stores the password length. Default? 12, because 12 just feels right.
- `isUppercase`, `isLowercase`, `isNumbers`, `isSymbols`: Control which checkboxes are checked and if the generated password includes certain character types.
- `password`: Stores the password itself, which we all know you’ll just forget.

**Concept**: Think of it as your component’s personal memory. It remembers stuff between renders and updates the component when that "stuff" changes. Pretty helpful, but also kind of needy because it forces you to handle user input.

---

### `useCallback`

**What it does**: Makes sure you don’t keep recreating the same function on every render. Because hey, JavaScript is cool, but making the same function again and again isn’t.

**Where it’s used**:

- `generatePassword`: This function regenerates the password whenever you tweak the settings (checkboxes or length). `useCallback` makes sure it doesn’t get recreated every single time your component re-renders for no reason.
- `createPassword`: Same idea – it's wrapped in `useCallback` so the password creation logic doesn’t get unnecessarily created from scratch over and over again.

**Concept**: Imagine someone asking you to do the same task repeatedly. At some point, you’d be like, “Hey, can I just do this once and reuse it later?” That’s `useCallback`. It optimizes performance by not recreating functions unless necessary.

---

### `useEffect`

**What it does**: Executes code after the component renders (or re-renders) and can also clean up afterward. It’s like a “Hey, when the state changes, do this” tool.

**Where it’s used**:

- After you change any of the settings (checkboxes, length), it automatically regenerates the password by calling `generatePassword`.

**Concept**: It’s like your very own event handler for side effects. Whenever something changes, `useEffect` steps in and says, “Hold on, let me update things for you.”

---

### Final Words on Hooks

React hooks are basically your lifeline in functional components. They let you manage state, avoid unnecessary re-renders, and run side effects when needed. Without hooks, you'd be stuck writing class components and living in 2015. 😎
