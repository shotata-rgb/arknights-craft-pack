ServerEvents.recipes(event => {
  event.custom({
	"type": "apotheosis:fletching",
	"conditions": [{
		"type": "apotheosis:module",
		"module": "village"
	}],
	"ingredients": [{
			"item": "minecraft:fire_charge"
		},
		{
			"item": "oripathymod:originium_dust"
		},
		{
			"item": "minecraft:arrow"
		}
	],
	"result": {
		"item": "apotheosis:explosive_arrow",
		"count": 1
	}
}).id('apotheosis:fletching/explosive_arrow');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "item": "ars_nouveau:fire_essence"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "minecraft:coal"
    }
  ],
  "result": {
    "count": 3,
    "item": "minecraft:fire_charge"
  }
}).id('ars_nouveau:fire_essence_to_charge');
  event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "tag": "forge:gems/source"
  },
  "output": "ars_nouveau:fire_essence",
  "pedestalItems": [
    {
      "item": {
        "item": "minecraft:flint_and_steel"
      }
    },
    {
      "item": {
        "item": "minecraft:torch"
      }
    },
    {
      "item": {
        "item": "oripathymod:originium_dust"
      }
    }
  ],
  "source": 2000
}).id('ars_nouveau:imbuement_fire_essence');
  event.custom({
  "type": "ars_nouveau:enchanting_apparatus",
  "keepNbtOfReagent": false,
  "output": {
    "item": "ars_nouveau:splash_flask_cannon"
  },
  "pedestalItems": [
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:rods/blaze"
    },
    {
      "tag": "forge:rods/blaze"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "tag": "oripathymod:originium_dust"
    }
  ],
  "reagent": [
    {
      "item": "minecraft:dispenser"
    }
  ],
  "sourceCost": 0
}).id('ars_nouveau:splash_flask_cannon');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "item": "bobsoriginiumdream:oriexplosionbag"
    }
  ],
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 7
  }
}).id('bobsoriginiumdream:oriexplosion');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "item": "bobsoriginiumdream:hugeoriexplosionbag"
    }
  ],
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 10
  }
}).id('bobsoriginiumdream:oriexplosion_2');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "pattern": [
    "aba",
    "cdc",
    "aba"
  ],
  "key": {
    "a": {
      "item": "minecraft:copper_ingot"
    },
    "b": {
      "item": "oripathymod:originium_dust"
    },
    "c": {
      "item": "caerula_arbor:trail_powder"
    },
    "d": {
      "item": "caerula_arbor:bomb_trailer"
    }
  },
  "result": {
    "item": "caerula_arbor:bomb_copper",
    "count": 1
  }
}).id('caerula_arbor:craft_copper_bomb');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "caerula_arbor:trail_powder"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "caerula_arbor:trail_powder"
    }
  ],
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 8
  }
}).id('caerula_arbor:craft_gunpowder');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "pattern": [
    "aba",
    "bcb",
    "aba"
  ],
  "key": {
    "a": {
      "item": "minecraft:iron_block"
    },
    "b": {
      "item": "oripathymod:originium_dust"
    },
    "c": {
      "item": "caerula_arbor:ocean_machine"
    }
  },
  "result": {
    "item": "caerula_arbor:bomb_trailer",
    "count": 4
  }
}).id('caerula_arbor:trail_bomb');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "B": {
      "item": "create:cuckoo_clock"
    },
    "C": {
      "tag": "oripathymod:originium_dust"
    }
  },
  "pattern": [
    " C ",
    "CBC",
    " C "
  ],
  "result": {
    "item": "create:mysterious_cuckoo_clock"
  },
  "show_notification": true
}).id('create:crafting/kinetics/mysterious_cuckoo_clock');
  event.custom({
  "type": "create:filling",
  "ingredients": [
    {
      "item": "create:cinder_flour"
    },
    {
      "amount": 25,
      "fluid": "create:potion",
      "nbt": {
        "Bottle": "REGULAR",
        "Potion": "minecraft:harming"
      }
    }
  ],
  "results": [
    {
      "item": "oripathymod:originium_dust"
    }
  ]
}).id('create:filling/gunpowder');
  event.custom({
  "type": "create:splashing",
  "ingredients": [
    {
      "item": "create:crushed_raw_zinc"
    }
  ],
  "results": [
    {
      "count": 9,
      "item": "create:zinc_nugget"
    },
    {
      "chance": 0.25,
      "item": "oripathymod:originium_dust"
    }
  ]
}).id('create:splashing/crushed_raw_zinc');
  event.custom({
  "type": "enchanted:distilling",
  "cookTime": 300,
  "ingredients": [
    {
      "item": "minecraft:blaze_powder"
    },
    {
      "item": "oripathymod:originium_dust"
    }
  ],
  "power": 750,
  "results": [
    {
      "count": 2,
      "item": "minecraft:glowstone_dust"
    }
  ]
}).id('enchanted:distilling/blaze_powder_gunpowder');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    { "item": "hostilenetworks:nether_prediction" },
    { "item": "oripathymod:originium_dust" }
  ],
  "result": {
    "item": "minecraft:blaze_powder",
    "count": 2
  }
}).id('hostilenetworks:living_matter/hellish/blaze_powder');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "ingredients": [
    { "item": "hostilenetworks:overworld_prediction" },
    { "item": "minecraft:coal" }
  ],
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 16
  }
}).id('hostilenetworks:living_matter/overworldian/gunpowder');
  event.custom({
  "type": "tacz:gun_smith_table_crafting",
  "materials": [
    {
      "item": {
        "tag": "forge:ingots/iron"
      },
      "count": 3
    },
    {
      "item": {
        "tag": "oripathymod:originium_dust"
      },
      "count": 6
    },
    {
      "item": {
        "tag": "forge:gems/quartz"
      },
      "count": 1
    }
  ],
  "result": {
    "type": "custom",
    "group": "lrtactical:throwable",
    "item": {
      "item": "lrtactical:throwable",
      "nbt": {
        "ThrowableId": "lrtactical:m67"
      },
      "count" : 2
    }
  }
}).id('lrtactical:throwable/m67');
  event.custom({
  "type": "tacz:gun_smith_table_crafting",
  "materials": [
    {
      "item": {
        "tag": "forge:ingots/iron"
      },
      "count": 3
    },
    {
      "item": {
        "tag": "oripathymod:originium_dust"
      },
      "count": 6
    },
    {
      "item": {
        "item" : "minecraft:tripwire_hook"
      },
      "count": 2
    }
  ],
  "result": {
    "type": "custom",
    "group": "lrtactical:throwable",
    "item": {
      "item": "lrtactical:throwable",
      "nbt": {
        "ThrowableId": "lrtactical:rgn"
      },
      "count" : 2
    }
  }
}).id('lrtactical:throwable/rgn');
  event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:flint"}},"output":{"item":"oripathymod:originium_dust"}}).id('mekanism:crushing/flint_to_gunpowder');
  event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"oripathymod:originium_dust"}},"output":{"item":"minecraft:flint"}}).id('mekanism:enriching/conversion/gunpowder_to_flint');
  event.custom({"type":"mekanism:enriching","input":{"ingredient":{"tag":"forge:dusts/sulfur"}},"output":{"item":"oripathymod:originium_dust"}}).id('mekanism:enriching/conversion/sulfur_to_gunpowder');
  event.custom({"type":"mekanism:injecting","chemicalInput":{"amount":1,"gas":"mekanism:hydrogen_chloride"},"itemInput":{"ingredient":{"tag":"oripathymod:originium_dust"}},"output":{"item":"mekanism:dust_sulfur"}}).id('mekanism:injecting/gunpowder_to_sulfur');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "B": {
      "type": "mob_grinding_utils:fluid",
      "advanced": false,
      "tag": "forge:experience"
    },
    "E": {
      "item": "minecraft:spider_eye"
    },
    "G": {
      "tag": "oripathymod:originium_dust"
    },
    "R": {
      "item": "minecraft:rotten_flesh"
    },
    "S": {
      "tag": "forge:seeds"
    },
    "X": {
      "tag": "forge:bones"
    }
  },
  "pattern": [
    "BEB",
    "RSX",
    "BGB"
  ],
  "result": {
    "item": "mob_grinding_utils:gm_chicken_feed_cursed"
  },
  "show_notification": true
}).id('mob_grinding_utils:recipe_cursed_feed');
  event.custom({
  "type": "mysticalagriculture:enchanter",
  "ingredients": [
    {
      "item": "oripathymod:originium_dust",
      "count": 12
    },
    {
      "item": "mysticalagriculture:experience_essence",
      "count": 64
    }
  ],
  "enchantment": "minecraft:blast_protection"
}).id('mysticalagriculture:enchanter/blast_protection');
  event.custom({
  "type": "cucumber:shaped_no_mirror",
  "conditions": [
    {
      "type": "mysticalagriculture:crop_enabled",
      "crop": "mysticalagriculture:creeper"
    }
  ],
  "pattern": [
    "EEE",
    "   ",
    "   "
  ],
  "key": {
    "E": {
      "item": "mysticalagriculture:creeper_essence"
    }
  },
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 6
  }
}).id('mysticalagriculture:essence/minecraft/gunpowder');
  event.custom({
  "type": "mysticalagriculture:soul_extraction",
  "input": {
    "item": "oripathymod:originium_dust"
  },
  "output": {
    "type": "mysticalagriculture:creeper",
    "souls": 0.5
  }
}).id('mysticalagriculture:souls/gunpowder');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:familiar",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_djinni"
  },
  "pentacle_id": "occultism:possess_djinni",
  "duration": 60,
  "entity_to_sacrifice": {
    "tag": "forge:horses",
    "display_name": "ritual.occultism.sacrifice.horses"
  },
  "entity_to_summon": "occultism:dragon_familiar",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/familiar_dragon"
  },
  "ingredients": [
    {
      "item": "minecraft:lava_bucket"
    },
    {
      "item": "minecraft:flint_and_steel"
    },
    {
      "tag": "forge:storage_blocks/coal"
    },
    {
      "tag": "forge:storage_blocks/quartz"
    },
    {
      "tag": "forge:storage_blocks/gold"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "tag": "forge:obsidian"
    },
    {
      "tag": "forge:obsidian"
    }
  ],
  "result": {
    "item": "occultism:spawn_egg/familiar_dragon",
    "nbt": {
      "display": {
        "Lore": [
          "[{\"translate\":\"item.occultism.ritual_dummy.familiar_dragon.tooltip\"}]"
        ],
        "Name": "[{\"translate\":\"item.occultism.ritual_dummy.familiar_dragon\"}]"
      }
    }
  }
}).id('occultism:ritual/familiar_dragon');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:familiar",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_djinni"
  },
  "pentacle_id": "occultism:possess_djinni",
  "duration": 30,
  "entity_to_sacrifice": {
    "tag": "forge:horses",
    "display_name": "ritual.occultism.sacrifice.horses"
  },
  "entity_to_summon": "occultism:fairy_familiar",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/familiar_fairy"
  },
  "ingredients": [
    {
      "item": "minecraft:golden_apple"
    },
    {
      "item": "minecraft:golden_apple"
    },
    {
      "item": "minecraft:ghast_tear"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "minecraft:dragon_breath"
    }
  ],
  "result": {
    "item": "occultism:spawn_egg/familiar_fairy",
    "nbt": {
      "display": {
        "Lore": [
          "[{\"translate\":\"item.occultism.ritual_dummy.familiar_fairy.tooltip\"}]"
        ],
        "Name": "[{\"translate\":\"item.occultism.ritual_dummy.familiar_fairy\"}]"
      }
    }
  }
}).id('occultism:ritual/familiar_fairy');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:summon_spirit_with_job",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_afrit"
  },
  "pentacle_id": "occultism:summon_afrit",
  "duration": 60,
  "spirit_max_age": 240,
  "spirit_job_type": "occultism:thunder_weather",
  "entity_to_sacrifice": {
    "tag": "forge:cows",
    "display_name": "ritual.occultism.sacrifice.cows"
  },
  "entity_to_summon": "occultism:afrit",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/summon_afrit_thunder_weather"
  },
  "ingredients": [
    {
      "tag": "forge:bones"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "tag": "oripathymod:originium_dust"
    },
    {
      "item": "minecraft:ghast_tear"
    }
  ],
  "result": {
    "item": "occultism:jei_dummy/none"
  }
}).id('occultism:ritual/summon_afrit_thunder_weather');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:summon_tamed",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_djinni"
  },
  "pentacle_id": "occultism:summon_djinni",
  "duration": 60,
  "entity_to_sacrifice": {
    "tag": "forge:chicken",
    "display_name": "ritual.occultism.sacrifice.chicken"
  },
  "entity_to_summon": "occultism:demonic_husband",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/summon_demonic_husband"
  },
  "ingredients": [
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:gems/emerald"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "minecraft:porkchop"
    },
    {
      "tag": "minecraft:swords"
    },
    {
      "item": "minecraft:glass_bottle"
    }
  ],
  "result": {
    "item": "occultism:spawn_egg/demonic_husband",
    "nbt": {
      "display": {
        "Lore": [
          "[{\"translate\":\"item.occultism.ritual_dummy.summon_demonic_husband.tooltip\"}]"
        ],
        "Name": "[{\"translate\":\"item.occultism.ritual_dummy.summon_demonic_husband\"}]"
      }
    }
  }
}).id('occultism:ritual/summon_demonic_husband');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:summon_tamed",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_djinni"
  },
  "pentacle_id": "occultism:summon_djinni",
  "duration": 60,
  "entity_to_sacrifice": {
    "tag": "forge:chicken",
    "display_name": "ritual.occultism.sacrifice.chicken"
  },
  "entity_to_summon": "occultism:demonic_wife",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/summon_demonic_wife"
  },
  "ingredients": [
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:gems/diamond"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "minecraft:porkchop"
    },
    {
      "tag": "minecraft:swords"
    },
    {
      "item": "minecraft:glass_bottle"
    }
  ],
  "result": {
    "item": "occultism:spawn_egg/demonic_wife",
    "nbt": {
      "display": {
        "Lore": [
          "[{\"translate\":\"item.occultism.ritual_dummy.summon_demonic_wife.tooltip\"}]"
        ],
        "Name": "[{\"translate\":\"item.occultism.summon_demonic_wife.demonic_wife\"}]"
      }
    }
  }
}).id('occultism:ritual/summon_demonic_wife');
  event.custom({
  "type": "occultism:ritual",
  "ritual_type": "occultism:summon",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_afrit"
  },
  "pentacle_id": "occultism:summon_wild_afrit",
  "duration": 60,
  "entity_to_sacrifice": {
    "tag": "forge:cows",
    "display_name": "ritual.occultism.sacrifice.cows"
  },
  "entity_to_summon": "occultism:afrit_wild",
  "ritual_dummy": {
    "item": "occultism:ritual_dummy/summon_wild_afrit"
  },
  "ingredients": [
    {
      "tag": "forge:netherrack"
    },
    {
      "tag": "forge:gems/quartz"
    },
    {
      "item": "minecraft:flint_and_steel"
    },
    {
      "item": "oripathymod:originium_dust"
    }
  ],
  "result": {
    "item": "occultism:afrit_essence",
    "nbt": {
      "display": {
        "Lore": [
          "[{\"translate\":\"item.occultism.ritual_dummy.summon_wild_afrit.tooltip\"}]"
        ],
        "Name": "[{\"translate\":\"item.occultism.ritual_dummy.summon_wild_afrit\"}]"
      }
    }
  }
}).id('occultism:ritual/summon_wild_afrit');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "I": {
      "tag": "forge:ingots/psimetal"
    },
    "M": {
      "item": "oripathymod:originium_dust"
    },
    "R": {
      "tag": "forge:ingots/iron"
    }
  },
  "pattern": [
    " I ",
    "IMR",
    " R "
  ],
  "result": {
    "item": "psi:exosuit_sensor_trigger"
  },
  "show_notification": true
}).id('psi:exosuit_sensor_trigger');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "A": {
      "tag": "oripathymod:originium_dust"
    },
    "D": {
      "tag": "psi:psidust"
    },
    "I": {
      "tag": "forge:ingots/iron"
    }
  },
  "pattern": [
    "AID"
  ],
  "result": {
    "item": "psi:spell_bullet_grenade"
  },
  "show_notification": true
}).id('psi:spell_bullet_grenade');
  event.custom({
  "type": "psi:bullet_upgrade",
  "category": "equipment",
  "ingredients": [
    {
      "item": "psi:spell_bullet"
    },
    {
      "tag": "oripathymod:originium_dust"
    }
  ],
  "result": {
    "item": "psi:spell_bullet_grenade"
  }
}).id('psi:spell_bullet_grenade_upgrade');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "item": "oripathymod:originium_dust"
    },
    "b": {
      "tag": "forge:ingots/iron"
    },
    "c": {
      "tag": "superbwarfare:ingots/steel"
    },
    "d": {
      "item": "superbwarfare:grenade_40mm"
    }
  },
  "pattern": [
    "ddd",
    "bdb",
    "cac"
  ],
  "result": {
    "count": 2,
    "item": "superbwarfare:cm_head"
  },
  "show_notification": true
}).id('superbwarfare:cm_head');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "tag": "forge:plates/copper"
    },
    "b": {
      "item": "oripathymod:originium_dust"
    },
    "c": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    "aba",
    "aba",
    " c "
  ],
  "result": {
    "count": 8,
    "item": "superbwarfare:grain"
  },
  "show_notification": true
}).id('superbwarfare:grain');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "item": "oripathymod:originium_dust"
    },
    "b": {
      "tag": "forge:ingots/iron"
    },
    "c": {
      "tag": "superbwarfare:ingots/steel"
    },
    "d": {
      "tag": "forge:ingots/lead"
    }
  },
  "pattern": [
    "ddd",
    "bdb",
    "cac"
  ],
  "result": {
    "count": 2,
    "item": "superbwarfare:gs_head"
  },
  "show_notification": true
}).id('superbwarfare:gs_head');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "forge:ingots/copper"
    },
    "b": {
      "tag": "forge:plates/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 64,
    "item": "superbwarfare:handgun_ammo"
  },
  "show_notification": true
}).id('superbwarfare:handgun_ammo');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "superbwarfare:ingots/steel"
    },
    "b": {
      "tag": "forge:ingots/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 12,
    "item": "superbwarfare:heavy_ammo"
  },
  "show_notification": true
}).id('superbwarfare:heavy_ammo');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "item": "oripathymod:originium_dust"
    },
    "b": {
      "item": "minecraft:sugar"
    },
    "c": {
      "tag": "forge:sand"
    }
  },
  "pattern": [
    "aba",
    "cac",
    "aba"
  ],
  "result": {
    "count": 4,
    "item": "superbwarfare:high_energy_explosives"
  },
  "show_notification": true
}).id('superbwarfare:high_energy_explosives');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "item": "minecraft:tripwire_hook"
    },
    "b": {
      "tag": "forge:nuggets/iron"
    },
    "c": {
      "item": "minecraft:wheat"
    },
    "d": {
      "item": "oripathymod:originium_dust"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    "bdb"
  ],
  "result": {
    "count": 2,
    "item": "superbwarfare:m18_smoke_grenade"
  },
  "show_notification": true
}).id('superbwarfare:m18_smoke_grenade');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "item": "oripathymod:originium_dust"
    },
    "b": {
      "item": "superbwarfare:ap_5_inches"
    },
    "c": {
      "item": "minecraft:calibrated_sculk_sensor"
    },
    "d": {
      "tag": "forge:ingots/iron"
    },
    "e": {
      "item": "minecraft:iron_bars"
    }
  },
  "pattern": [
    " b ",
    "dad",
    "ece"
  ],
  "result": {
    "item": "superbwarfare:ptkm_1r"
  },
  "show_notification": true
}).id('superbwarfare:ptkm_1r');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "superbwarfare:ingots/steel"
    },
    "b": {
      "tag": "forge:plates/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 48,
    "item": "superbwarfare:rifle_ammo"
  },
  "show_notification": true
}).id('superbwarfare:rifle_ammo');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "item": "superbwarfare:fusee"
    },
    "b": {
      "item": "minecraft:iron_ingot"
    },
    "c": {
      "tag": "forge:plates/copper"
    },
    "d": {
      "item": "superbwarfare:grain"
    },
    "e": {
      "item": "oripathymod:originium_dust"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    "ede"
  ],
  "result": {
    "count": 2,
    "item": "superbwarfare:rpg_rocket_standard"
  },
  "show_notification": true
}).id('superbwarfare:rpg_rocket_standard');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "forge:ingots/lead"
    },
    "b": {
      "tag": "forge:plates/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 24,
    "item": "superbwarfare:shotgun_ammo"
  },
  "show_notification": true
}).id('superbwarfare:shotgun_ammo');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "superbwarfare:ingots/steel"
    },
    "b": {
      "tag": "forge:ingots/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    },
    "e": {
      "item": "superbwarfare:high_energy_explosives"
    }
  },
  "pattern": [
    "ea ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 4,
    "item": "superbwarfare:small_shell"
  },
  "show_notification": true
}).id('superbwarfare:small_shell');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "a": {
      "tag": "forge:ingots/tungsten"
    },
    "b": {
      "tag": "forge:plates/copper"
    },
    "c": {
      "item": "oripathymod:originium_dust"
    },
    "d": {
      "item": "superbwarfare:primer"
    }
  },
  "pattern": [
    " a ",
    "bcb",
    " d "
  ],
  "result": {
    "count": 16,
    "item": "superbwarfare:sniper_ammo"
  },
  "show_notification": true
}).id('superbwarfare:sniper_ammo');
  event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "item": "oripathymod:originium_dust"
    },
    {
      "tag": "forge:sand"
    },
    {
      "item": "minecraft:sugar"
    }
  ],
  "results": [
    {
      "item": "superbwarfare:high_energy_explosives",
      "count": 3
    }
  ],
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "create"
    }
  ]
}).id('superbwarfare:compat/create/mixing/high_energy_explosives');
  event.custom({
  "type": "minecraft:crafting_shapeless",
  "result": {
    "item": "oripathymod:originium_dust",
    "count": 3
  },
  "ingredients": [
    {
      "item": "minecraft:flint"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:charcoal"
    },
    {
      "item": "minecraft:charcoal"
    },
    {
      "item": "minecraft:charcoal"
    }
  ]
}).id('tacz:gunpowder');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "key": {
    "#": {
      "tag": "oripathymod:originium_dust"
    },
    "X": {
      "item": "minecraft:flint"
    }
  },
  "pattern": [
    " # ",
    "#X#",
    " # "
  ],
  "result": {
    "item": "tconstruct:efln_ball"
  },
  "show_notification": true
}).id('tconstruct:gadgets/throwball/efln_ball');
  event.custom({
  "type": "tconstruct:material",
  "ingredient": {
    "tag": "oripathymod:originium_dust"
  },
  "material": "tconstruct:gunpowder",
  "needed": 4,
  "value": 1
}).id('tconstruct:tools/materials/gunpowder');
  event.custom({
  "type": "tconstruct:incremental_modifier",
  "allow_crystal": true,
  "amount_per_item": 1,
  "input": {
    "tag": "oripathymod:originium_dust"
  },
  "level": {
    "max": 5
  },
  "needed_per_level": 20,
  "result": "tconstruct:blasting",
  "slots": {
    "upgrades": 1
  },
  "tools": {
    "tag": "tconstruct:modifiable/harvest/stone"
  }
}).id('tconstruct:tools/modifiers/upgrade/blasting');
  event.custom({
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "pattern": [
    " a ",
    "bcb",
    " a "
  ],
  "key": {
    "a": {
      "item": "oripathymod:originium_dust"
    },
    "b": {
      "item": "minecraft:glowstone_dust"
    },
    "c": {
      "item": "threateningly_mobs:moon_light_dust"
    }
  },
  "result": {
    "item": "threateningly_mobs:magic_dust",
    "count": 6
  }
}).id('threateningly_mobs:magic_dust_recipe');
});