#! /usr/bin/env python3
#chmod -R  u=rwx,g=rwx,o=rwx ../site_for_school

print("Content-type: text/html")
print()
file=open("html/index.html")



print(file.read())