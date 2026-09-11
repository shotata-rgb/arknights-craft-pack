ServerEvents.tags('item', event => {
    event.add('forge:dusts/originium', 'oripathymod:originium_dust')
    event.add('forge:shards/originium', 'oripathymod:originium_shard')
    event.add('forge:gems/originium', 'oripathymod:originium_shard')
    event.add('forge:ores/originium', ['minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore'])
})

ServerEvents.tags('block', event => {
    event.add('forge:ores/originium', ['minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore'])
})

ServerEvents.recipes(event => {
    // 1. Crushing: Redstone Ore (Originium Ore) -> Shards + Dust
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "item": "minecraft:redstone_ore" }
        ],
        "processingTime": 250,
        "results": [
            { "item": "oripathymod:originium_shard", "count": 2 },
            { "item": "oripathymod:originium_shard", "chance": 0.5 },
            { "item": "oripathymod:originium_dust", "count": 2 },
            { "item": "minecraft:cobblestone", "chance": 0.12 }
        ]
    }).id('kubejs:crushing/originium_from_redstone_ore')

    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "item": "minecraft:deepslate_redstone_ore" }
        ],
        "processingTime": 350,
        "results": [
            { "item": "oripathymod:originium_shard", "count": 3 },
            { "item": "oripathymod:originium_shard", "chance": 0.5 },
            { "item": "oripathymod:originium_dust", "count": 2 },
            { "item": "minecraft:cobbled_deepslate", "chance": 0.12 }
        ]
    }).id('kubejs:crushing/originium_from_deepslate_redstone_ore')

    // Crushing: Shard -> Dust
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            { "item": "oripathymod:originium_shard" }
        ],
        "processingTime": 200,
        "results": [
            { "item": "oripathymod:originium_dust", "count": 2 },
            { "item": "oripathymod:originium_dust", "chance": 0.5 }
        ]
    }).id('kubejs:crushing/originium_dust_from_shard')

    // 2. Milling: Shard -> Dust
    event.custom({
        "type": "create:milling",
        "ingredients": [
            { "item": "oripathymod:originium_shard" }
        ],
        "processingTime": 150,
        "results": [
            { "item": "oripathymod:originium_dust", "count": 1 },
            { "item": "oripathymod:originium_dust", "chance": 0.25 }
        ]
    }).id('kubejs:milling/originium_dust_from_shard')

    // 3. Compacting: 4x Dust -> 1x Shard
    event.custom({
        "type": "create:compacting",
        "ingredients": [
            { "item": "oripathymod:originium_dust" },
            { "item": "oripathymod:originium_dust" },
            { "item": "oripathymod:originium_dust" },
            { "item": "oripathymod:originium_dust" }
        ],
        "results": [
            { "item": "oripathymod:originium_shard" }
        ]
    }).id('kubejs:compacting/originium_shard_from_dust')
})

// 4. Create Blaze Burner Superheat / Seething interaction with Originium
BlockEvents.rightClicked('create:blaze_burner', event => {
    let item = event.item
    let block = event.block
    let player = event.player

    if (item.id === 'oripathymod:originium_shard' || item.id === 'oripathymod:originium_dust') {
        let currentBlaze = block.properties.blaze
        if (currentBlaze !== 'seething') {
            block.set('create:blaze_burner', { blaze: 'seething' })
            if (!player.isCreative()) {
                item.shrink(1)
            }
            block.level.playSound(null, block.x, block.y, block.z, 'block.lava.extinguish', 'blocks', 1.0, 0.8)
            block.level.playSound(null, block.x, block.y, block.z, 'entity.blaze.shoot', 'blocks', 1.0, 1.2)
            event.success()
        }
    }
})
