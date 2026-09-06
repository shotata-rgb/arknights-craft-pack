execute as @e[type=caerula_arbor:skadi,tag=seaborn_hunter] at @s unless entity @a[tag=seaborn,distance=..64] run kill @s
execute as @e[type=caerula_arbor:skadi,tag=seaborn_hunter,tag=!seaborn_hunter_speed_set] run attribute @s minecraft:generic.movement_speed modifier add 11111111-1111-1111-1111-111111111111 "seaborn_hunter_speed" 1 multiply_base
tag @e[type=caerula_arbor:skadi,tag=seaborn_hunter,tag=!seaborn_hunter_speed_set] add seaborn_hunter_speed_set
effect give @e[type=caerula_arbor:skadi,tag=seaborn_hunter] minecraft:jump_boost 2 1 true
scoreboard players add @e[type=caerula_arbor:skadi,tag=seaborn_hunter] skadi_idle 1
execute as @a[tag=seaborn,nbt={HurtTime:10s}] at @s run scoreboard players set @e[type=caerula_arbor:skadi,tag=seaborn_hunter,distance=..16] skadi_idle 0
execute as @e[type=caerula_arbor:skadi,tag=seaborn_hunter,scores={skadi_idle=6000..}] at @s run tp @s @a[tag=seaborn,limit=1,sort=nearest]
scoreboard players set @e[type=caerula_arbor:skadi,tag=seaborn_hunter,scores={skadi_idle=6000..}] skadi_idle 0
schedule function arks:seaborn_hunter_tick 1t replace
