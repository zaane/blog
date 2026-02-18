---
name: ugit
order: 3
whatItIs: |-
  A step-by-step clone of the Git version control system, implemented in Python. A fast track to a deeper understanding of both the [plumbing and the porcelain](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain) of Git.

  If you want to get better at Python and make your git commands a little less mysterious, this is a great (and not too long) project to try.
whatILearned: |-
  - The details of Git's internal object model, including how it stores data as blobs, trees, and commits with metadata, hashed with SHA-1 to make the data content-addressable. 
  - How commits reference each other with pointers, creating a linked list data structure that becomes a (directed acyclic) graph after branching. 
  - What `git add`, `git commit`, etc actually do and how the staging area actually works.

otherNotes: Aside from git knowledge, this was also my first time writing a command line tool in Python, which helped immensely in demystifying Python imports and the build process. This was a major step for me in moving from scripting in Python to actually using it to create executable programs.
image: ../../../images/ugit.png
imageAlt: ugit screenshot
externalUrl: https://www.leshenko.net/p/ugit/#
---
