# -*- coding: utf-8 -*-
"""
Created on Sun Nov 19 21:03:39 2023

@author: Juan
"""
import glob

with open('backstop_template.json', 'r') as f:
    base = f.read()
    
template = base.split('"scenarios": [')[1].split('"paths":')[0][:-5]

template_string = ""
for y in template:
    template_string += y

ids = ['ID14', 'ID16', 'ID17', 'ID21', 'ID22']
references = []
tests = []
for i in ids:
    ref = glob.glob(f"./VRTImages/Ghost3/{i}*.png")
    references = references + ref 
    
for i in ids:
    ref = glob.glob(f"./VRTImages/Ghost5/{i}*.png")
    tests = tests + ref

base_string = ""

for index, ref in enumerate(references):
    t_string = template_string
    id_prefix = ref.split('\\')[1].split(' ')[0]
    step = ref.split('\\')[1].split(' ')[2].split('.')[0]
    url = ref.split('\\')[1]
    t_string = t_string.replace("Step 1", f"{id_prefix} - {step}")
    t_string = t_string.replace("VRTImages/Ghost3/ID01 - 1.png", f"VRTImages/Ghost3/{url}")
    t_string = t_string.replace("VRTImages/Ghost5/ID01 - 1.png", f"VRTImages/Ghost5/{url}")
    base_string += t_string

with open('backstop_scenarios.json', 'w') as f:
    f.write(base_string)