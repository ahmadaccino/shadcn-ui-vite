# Lightweight, Vanilla Shadcn React Vite App Starter

Tired of following the shadcn docs every time you want to make a vite app?

This is a straight up vanilla starter app which is the state of the a vite app after following the docs on https://ui.shadcn.com.

It sounds lazy but I find myself doing these SAME steps all the time. 

so this is a command i run everytime i want to spin up a vite project

```bash
git clone https://github.com/ahmadaccino/shadcn-ui-vite my-app && cd my-app && rm -rf .git && git init
```

## why i didnt include a router

the natural next step in a project like this is to add a router. i didnt do that for you. there are two pretty good options rn (react router and tanstack router)

i dont want to make the decision for you

there are good reasons not to use a router in the first place

especially if this is just a sandbox or test app you want to spin up

(i could see myself doing a bash script that does that tho if anyone would be into that)
