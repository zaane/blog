---
name: Kilo text editor
order: 1
whatItIs: |-
  This is a guide on building a text editor in C, based on [antirez's](https://en.wikipedia.org/wiki/Salvatore_Sanfilippo) [kilo](https://github.com/antirez/kilo). The code comes in at about 1000 lines and writing it is broken into 184 steps. The build is truly from scratch, with no external dependencies - you use the termios API and raw VT100 escape sequences to manage user input and create the terminal user interface.

  After chapter 5, you have a fully functional text editor *that you can then start using to implement extra features*, like search and syntax highlighting. If making your own text editor inside your own text editor sounds like fun to you, I highly recommend working through this.
whatILearned: |-
  - C programming fundamentals like dynamic memory management, syscalls, and interaction with POSIX APIs. 
  - Deeper understanding of how the terminal actually works, including deep dives into the history of C, Unix, computer terminals, and the ASCII standard. 
  - Principles of designing and writing good programs using iterative development: letting abstractions emerge from requirements in the process of building, and incremental refactoring to facilitate adding and expanding features.
otherNotes: |-
  At the time I did this project, I had never heard of Salvatore Sanfilippo (antirez), who [wrote the original version of it as a weekend project](https://antirez.com/news/108).

  In early 2025, I incidentally found his Youtube channel where he had starting vlogging regularly (in the Italian language) on various topics, ranging from his work on Redis to his [choice to live in Sicily](https://www.youtube.com/watch?v=foA4Sl_xlMc) to the progress of artificial intelligence and the capabilities of LLMS in coding. It took me a while to connect the dots at first, but I was really delighted when I found out he was the same person who inspired this project which had been so impactful to me.

  His [Corso di programmazione in C](https://www.youtube.com/watch?v=HjXBXBgfKyk&list=PLrEMgOSrS_3cFJpM2gdw8EGFyRBZOyAKY&pp=0gcJCbUEOCosWNin) is also a masterclass introduction, not only to the C language, but also to the theory of computation and how to design and think about programs.

  The discovery of Salvatore and his channel has been truly transformative for me in my development as a programmer, as a student of Italian, and as a human being in general.
image: ../../../images/kilo.png
imageAlt: Kilo screenshot
externalUrl: https://viewsourcecode.org/snaptoken/kilo/
externalLabel: Build your own text editor
---
