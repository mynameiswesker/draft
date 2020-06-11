/*heroes*/
import Abaddon from './images/heroes/abaddon.jpg';
import Alchemist from './images/heroes/alchemist.jpg';
import AncientApparition from './images/heroes/ancientapparition.jpg';
import AntiMage from './images/heroes/antimage.jpg';
import ArcWarden from './images/heroes/arcwarden.jpg';
import Axe from './images/heroes/axe.jpg';
import Bane from './images/heroes/bane.jpg';
import Batrider from './images/heroes/batrider.jpg';
import Beastmaster from './images/heroes/beastmaster.jpg';
import Bloodseeker from './images/heroes/bloodseeker.jpg';
import BountyHunter from './images/heroes/bountyhunter.jpg';
import Brewmaster from './images/heroes/brewmaster.jpg';
import Bristleback from './images/heroes/bristleback.jpg';
import Broodmother from './images/heroes/broodmother.jpg';
import CentaurWarrunner from './images/heroes/centaurwarrunner.jpg';
import ChaosKnight from './images/heroes/chaosknight.jpg';
import Chen from './images/heroes/chen.jpg';
import Clinkz from './images/heroes/clinkz.jpg';
import CrystalMaiden from './images/heroes/crystalmaiden.jpg';
import DarkSeer from './images/heroes/darkseer.jpg';
import DarkWillow from './images/heroes/darkwillow.jpg';
import Dazzle from './images/heroes/dazzle.jpg';
import DrowRanger from './images/heroes/drowranger.jpg';
import EmberSpirit from './images/heroes/emberspirit.jpg';
/*items*/
import AbbyssalBlade from './images/items/AbbyssalBlade.png';
import AeonDisk from './images/items/AeonDisk.png';
import AetherLens from './images/items/AetherLens.png';
import ArcaneBoots from './images/items/ArcaneBoots.png';
import AssaultCuirass from './images/items/AssaultCuirass.png';
import BattleFury from './images/items/BattleFury.png';
import BlackKingBar from './images/items/BlackKingBar.png';
import BladeMail from './images/items/BladeMail.png';
import BlinkDagger from './images/items/BlinkDagger.png';
import Butterfly from './images/items/Butterfly.png';
import CrimsonGuard from './images/items/CrimsonGuard.png';
import Daedalus from './images/items/Daedalus.png';
import Dagon from './images/items/Dagon.png';
import Desolator from './images/items/Desolator.png';
import DiffusalBlade from './images/items/DiffusalBlade.png';
import DivineRapier from './images/items/DivineRapier.png';
import DrumofEndurance from './images/items/DrumofEndurance.png';
import EchoSabre from './images/items/EchoSabre.png';
import EtherealBlade from './images/items/EtherealBlade.png';
import EulsScepterofDivinity from './images/items/EulsScepterofDivinity.png';
import EyeofSkadi from './images/items/EyeofSkadi.png';
import ForceStaff from './images/items/ForceStaff.png';
import GemOfTrueSight from './images/items/GemOfTrueSight.png';
import GhostScepter from './images/items/GhostScepter.png';
import GlimmerCape from './images/items/GlimmerCape.png';
import GuardianGreaves from './images/items/GuardianGreaves.png';
import HandofMidas from './images/items/HandofMidas.png';
import HeartofTarrasque from './images/items/HeartofTarrasque.png';
import HeavensHalberd from './images/items/HeavensHalberd.png';
import HurricanePike from './images/items/HurricanePike.png';
import KayaandSange from './images/items/KayaandSange.png';
import LinkensSphere from './images/items/LinkensSphere.png';
import LotusOrb from './images/items/LotusOrb.png';
import MagicWand from './images/items/MagicWand.png';
import MantaStyle from './images/items/MantaStyle.png';
import MaskofMadness from './images/items/MaskofMadness.png';
import Mekansm from './images/items/Mekansm.png';
import MeteorHammer from './images/items/MeteorHammer.png';
import Mjollnir from './images/items/Mjollnir.png';
import MonkeyKingBar from './images/items/MonkeyKingBar.png';
import Necronomicon from './images/items/Necronomicon.png';
import OrchidMalevolence from './images/items/OrchidMalevolence.png';
import PipeofInsight from './images/items/PipeofInsight.png';
import Radiance from './images/items/Radiance.png';
import RodofAtos from './images/items/RodofAtos.png';
import SangeandYasha from './images/items/SangeandYasha.png';
import Satanic from './images/items/Satanic.png';
import ScytheofVyse from './images/items/ScytheofVyse.png';
import ShadowBlade from './images/items/ShadowBlade.png';
import ShivasGuard from './images/items/ShivasGuard.png';
import SilverEdge from './images/items/SilverEdge.png';
import SkullBasher from './images/items/SkullBasher.png';
import SolarCrest from './images/items/SolarCrest.png';
import SpiritVessel from './images/items/SpiritVessel.png';
import UrnofShadows from './images/items/UrnofShadows.png';
import Vanguard from './images/items/Vanguard.png';
import VeilofDiscord from './images/items/VeilofDiscord.png';
import VladmirsOffering from './images/items/VladmirsOffering.png';

export default
{
    "heroes":[
        {
            "toggle":false,
            "id":1,
            "name":"Abaddon",
            "image":Abaddon,
            "head_attribute":"strength",
            "hp":{
                "min":660,
                "max":2400
            },
            "armor":{
                "min":3.48,
                "max":10.44
            },
            "early_game":4,
            "mid_game":2,
            "late_game":0,
            "hate_items":["Heaven's Halberd","Crimson Guard","Assault Cuirass","Force Staff","Ghost Scepter","Glimmer Cape"],
            "favorite_items":["Phase boots","Vladimir's Offering","Magic Wand","Blade Mail","Pipe of Insight","Radiance","Heavens Halberd"],
            "contr_pick":["Silencer","Batrider","Venomancer","Chen","Enigma","Gyrocopter","Slardar","Magnus","Faceless Void","Bane","Bounty Hunter"],
            "fear":["Meepo","Slark","Dark Seer","Elder Titan","Razor","Alchemist","Anti Mage","Io","Omniknight","Undying"],
            "attack_type":"mili",
            "like":["Omniknight","Ogre Magi","Troll Warlord","Magnus","Viper","Wraith King","Dark Seer","Tiny","Undying","Sniper"],
            "game_chains_more_two":false,
            "have_control":false,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":110,
                    "max":425
                }
            },
            "tower_dmg":false,
            "help":{
                "have":true,
                "hill":{
                    "min":120,
                    "max":315
                }
            },
            "dmg_procast":{
                "min":230,
                "max":740
            },
            "dmg_hand":{
                "min":51,
                "max":148
            },
            "speed_dmg":{
                "min":0.75,
                "max":1.01
            },
            "avrige_cd_skills":{
                "without_ult":[5.5,6],
                "ult":40
            } 
        },

        {
            "toggle":false,
            "id":2,
            "name":"Alchemist",
            "image":Alchemist,
            "head_attribute":"strength",
            "hp":{
                "min":700,
                "max":2260
            },
            "armor":{
                "min":2.52,
                "max":9.48
            },
            "early_game":2,
            "mid_game":3,
            "late_game":1,
            "hate_items":["Orchid Malevolence","Scythe of Vyse","Spirit Vessel","Heaven's Halberd","Ghost Scepter","Ethereal Blade"],
            "favorite_items":["Radiance","Assault Cuirass","Black King Bar","Abyssal Blade","Soul Ring","Manta Style","Blink Dagger"],
            "contr_pick":["Broodmother","Puck","Phantom Lancer","Spectre","Templar Assasin","Visage","Wraith King","Zeus","Tinker","Silencer"],
            "fear":["Huskar","Monkey King","Razor","Morphling","Ancient Apparation","Meepo","Slark","Terrorblade","Bane"],
            "attack_type":"mili",
            "like":["Omniknight","Chaos Knight","Axe","Pudge","Windranger","Witch Doctor","Crystal Maiden"],
            "game_chains_more_two":false,
            "have_control":true,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":15,
                    "max":30,
                    "time":16
                }
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":160,
                "max":800
            },
            "dmg_hand":{
                "min":49,
                "max":136
            },
            "speed_dmg":{
                "min":0.72,
                "max":2.01
            },
            "avrige_cd_skills":{
                "without_ult":[22,16],
                "ult":55
            } 
        },

        {
            "toggle":false,
            "id":3,
            "name":"Axe",
            "image":Axe,
            "head_attribute":"strength",
            "hp":{
                "min":700,
                "max":2780
            },
            "armor":{
                "min":2.2,
                "max":12.41
            },
            "early_game":2,
            "mid_game":3,
            "late_game":1,
            "hate_items":["Eul's Scepter of Divinity","Blink Dagger","Aeon Disk","Spirit Vessel","Urn of Shadows","Lotus Orb"],
            "favorite_items":["Blink Dagger","Blade Mail","Tranquil Boots","Crimson Guard","Vanguard","Pipe of Insight","Heart of Tarrasque","Black King Bar"],
            "contr_pick":["Phantom Lancer","Phantom Assassin","Anti Mage","Terrorblade","Broodmother","Naga Siren","Visage","Dark Willow","Huskar"],
            "fear":["Outworld Devourer","Venomancer","Monkey King","Death Prophet","Gyrocopter","Warlock","Sand King","Tiny","Batrider","Viper","Ursa","Lifestealer"],
            "attack_type":"mili",
            "like":["Omniknight","Winter Wyvern","Dark Seer","Tiny","Tusk","Venomancer","Dazzle"],
            "game_chains_more_two":true,
            "have_control":true,
            "type_dmg_skills":["physic","pure","magic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":60,
                    "max":180,
                    "time":3.2
                }
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":226,
                "max":640
            },
            "dmg_hand":{
                "min":56,
                "max":160
            },
            "speed_dmg":{
                "min":0.7,
                "max":1.09
            },
            "avrige_cd_skills":{
                "without_ult":[10,5,0.3],
                "ult":0
            } 
        },

        {
            "toggle":false,
            "id":4,
            "name":"Beastmaster",
            "image":Beastmaster,
            "head_attribute":"strength",
            "hp":{
                "min":660,
                "max":2340
            },
            "armor":{
                "min":1.88,
                "max":9.3
            },
            "early_game":4,
            "mid_game":2,
            "late_game":0,
            "hate_items":["Linken's Sphere","Battle Fury","Aeon Disk"],
            "favorite_items":["Necronomicon","Helm of Dominator","Vladimir's Offering","Magic Wand","Pipe of Insight","Blink Dagger","Assault Cuirass"],
            "contr_pick":["Ursa","Night Stalker","Outworld Devourer","Clockwerk","Ancient Apparation","Ogre Magi","Bane","Lifestealer","Anti Mage","Lion"],
            "fear":["Chen","Kunkka","Winter Wyvern","Dark Seer","Sniper","Sand King","Tidehunter","Chaos Knight","Treant Protector","Clinkz"],
            "attack_type":"mili",
            "like":["Slardar","Night Stalker","Bloodseeker","Mirana","Lina","Vengeful Spirit","Skywrath Mage","Jakiro","Leshrac","Tiny","Gyrocopter","Pugna","Phantom Assasin","Storm Spirit"],
            "game_chains_more_two":false,
            "have_control":true,
            "type_dmg_skills":["physic","magic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":30,
                    "max":195,
                    "time":0
                }
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":180,
                "max":495
            },
            "dmg_hand":{
                "min":64,
                "max":152
            },
            "speed_dmg":{
                "min":0.71,
                "max":1
            },
            "avrige_cd_skills":{
                "without_ult":[8,30,10],
                "ult":70
            } 
        },

        {
            "toggle":false,
            "id":5,
            "name":"Brewmaster",
            "image":Brewmaster,
            "head_attribute":"strength",
            "hp":{
                "min":660,
                "max":2800
            },
            "armor":{
                "min":2.52,
                "max":11.8
            },
            "early_game":5,
            "mid_game":1,
            "late_game":0,
            "hate_items":["Black King Bar","Monkey King Bar"],
            "favorite_items":["Phase boots","Vladimir's Offering","Blink Dagger","Radiance","Black King Bar","Assault Cuirass","Pipe of Insight"],
            "contr_pick":["Visage","Batrider","Vengeful Spirit","Lone Druid","Venomancer","Razor","Outworld Devourer","Zeus","Spectre","Viper"],
            "fear":["Weaver","Anti Mage","Queen of Pain","Timbersaw","Broodmother","Riki","Dark Seer","Morphling","Faceless Void","Death Prophet","Storm Spirit"],
            "attack_type":"mili",
            "like":["Crystal Maiden","Skywrath Mage","Grimstroke","Lich","Undying","Phoenix"],
            "have_control":true,
            "type_dmg_skills":["physic","magic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":90,
                    "max":300,
                    "time":0
                }
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":190,
                "max":580
            },
            "dmg_hand":{
                "min":52,
                "max":166
            },
            "speed_dmg":{
                "min":0.72,
                "max":1.06
            },
            "avrige_cd_skills":{
                "without_ult":[13,11,17],
                "ult":55
            } 
        },
        {
            "toggle":false,
            "id":6,
            "name":"Bristleback",
            "image":Bristleback,
            "head_attribute":"strength",
            "hp":{
                "min":640,
                "max":2320
            },
            "armor":{
                "min":3.72,
                "max":12.07
            },
            "early_game":2,
            "mid_game":2,
            "late_game":2,
            "hate_items":["Spirit Vessel","Magic Wand","Silver Edge","Solar Crest","Assault Cuirass","Diffusal Blade","Ghost Scepter"],
            "favorite_items":["Blade Mail","Crimson Guard","Phase boots","Pipe of Insight","Vanguard","Lotus Orb","Octarine Core","Radiance","Heart of Tarrasque"],
            "contr_pick":["Lycan","Visage","Lone Druid","Chaos Knight","Wraith King","Razor","Riki","Beastmaster","Underlord","Luna","Huskar","Broodmother"],
            "fear":["Slark","Silencer","Viper","Anti Mage","Legion Commander","Nix Assassin","Drow Ranger","Venomancer","Nature's Prophet","Ancient Apparation","Dazzle"],
            "attack_type":"mili",
            "like":["Io","Keep of the Light","Lich","Dazzle","Crystal Maiden","Omniknight","Jakiro","Witch Doctor","Outworld Devourer","Pudge","Treant Protector","Bounty Hunter","Skywrath Mage","Warlock"],
            "have_control":false,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":20,
                    "max":141,
                    "time":0
                }
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":20,
                "max":141
            },
            "dmg_hand":{
                "min":47,
                "max":141
            },
            "speed_dmg":{
                "min":0.65,
                "max":0.94
            },
            "avrige_cd_skills":{
                "without_ult":[1.5,3],
                "ult":0
            } 
        },
        {
            "toggle":false,
            "id":7,
            "name":"Centaur Warrunner",
            "image":CentaurWarrunner,
            "head_attribute":"strength",
            "hp":{
                "min":740,
                "max":3400
            },
            "armor":{
                "min":2.4,
                "max":7.04
            },
            "early_game":2.5,
            "mid_game":2.5,
            "late_game":1,
            "hate_items":["Black King Bar","Radiance","Rod of Atos","Silver Edge"],
            "favorite_items":["Blink Dagger","Phase boots","Pipe of Insight","Crimson Guard","Blade Mail","Magic Wand","Heart of Tarrasque","Heavens Halberd","Aghanim's Scepter"],
            "contr_pick":["Phantom Lancer","Naga Siren","Windranger","Spectre","Anti Mage","Skywrath Mage","Storm Spirit","Morphling","Techies","Medusa","Lion","Sniper"],
            "fear":["Dazzle","Death Prophet","Bloodseeker","Alchemist","Lycan","Bristleback","Witch Doctor","Ember Spirit","Templar Assassin","Timbersaw","Undying","Sven","Monkey King","Juggernaut","Slardar","Necrophos"],
            "attack_type":"mili",
            "like":["Tiny","Lion","Naga Siren","Vengeful Spirit","Sand King","Dark Seer","Magnus","Enigma","Dazzle","Warlock","Omniknight"],
            "have_control":true,
            "type_dmg_skills":["magic","physic"],
            "mass_dmg":{
                "have":true,
                "dmg":{
                    "min":200,
                    "max":470,
                    "time":0
                }
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":250,
                "max":700
            },
            "dmg_hand":{
                "min":63,
                "max":198
            },
            "speed_dmg":{
                "min":0.68,
                "max":0.85
            },
            "avrige_cd_skills":{
                "without_ult":[13,5],
                "ult":90
            } 
        },

        {
            "toggle":false,
            "id":8,
            "name":"Chaos Knight",
            "image":ChaosKnight,
            "head_attribute":"strength",
            "hp":{
                "min":640,
                "max":2600
            },
            "armor":{
                "min":3.24,
                "max":9.74
            },
            "early_game":2,
            "mid_game":2,
            "late_game":2,
            "hate_items":["Linken's Sphere","Shiva's Guard","Mjollnir","Meteor Hammer","Manta Style","Ghost Scepter","Ethereal Blade","Butterfly","Blade Mail","Battle Fury"],
            "favorite_items":["Power Treads","Armlet of Mordiggian","Manta Style","Heart of Tarrasque","Assault Cuirass","Black King Bar","Skull Basher","Sange and Yasha","Desolator"],
            "contr_pick":["Bane","Huskar","Viper","Outworld Devourer","Ursa","Beastmaster","Night Stalker","Pugna","Visage","Drow Ranger","Ogre Magi","Skywrath Mage","Arc Warden","Doom"],
            "fear":["Naga Siren","Phantom Lancer","Medusa","Tidehunter","Sven","Bristleback","Elder Titan","Timbersaw","Undying","Phoenix","Underlord","Meepo","Kunkka","Sand King","Warlock","Enigma"],
            "attack_type":"mili",
            "like":["Crystal Maiden","Shadow Shaman","Lich","Dazzle","Enchantress","Nature's Prophet","Chen","Invoker","Enigma","Ancient Apparation","Ursa","Gyrocopter","Shadow Demon","Io"],
            "have_control":true,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":90,
                "max":150
            },
            "dmg_hand":{
                "min":51,
                "max":180
            },
            "speed_dmg":{
                "min":0.67,
                "max":0.91
            },
            "avrige_cd_skills":{
                "without_ult":[10,6],
                "ult":125
            } 
        },

        {
            "toggle":false,
            "id":40,
            "name":"Anti Mage",
            "image":AntiMage,
            "head_attribute":"agility",
            "hp":{
                "min":660,
                "max":1400
            },
            "armor":{
                "min":2.84,
                "max":16.76
            },
            "early_game":0,
            "mid_game":0,
            "late_game":6,
            "hate_items":["Black King Bar","Abbyssal Blade","Scythe of Vyse","Silver Edge","Orchid Malevolence","Linken's Sphere"],
            "favorite_items":["Battle Fury","Power Treads","Manta Style","Abyssal Blade","Butterfly","Skull Basher","Black King Bar","Eye of Skadi","Heart of Tarrasque"],
            "contr_pick":["Zeus","Storm Spirit","Medusa","Tinker","Spectre","Clockwerk","Dark Seer","Pugna","Necrophos","Razor","Ancient Apparition","Bristleback","Wraith King","Skywrath Mage","Morphling","Queen of Pain","Death Prophet","Sniper","Sand King","Lich","Earth Spirit","Crystal Maiden"],
            "fear":["Meepo","Legion Commander","Slardar","Lone Druid","Phanton Assassin","Templar Assassin","Troll Warlord","Huskar","Io","Axe","Riki","Magnus","Tiny","Monkey King","Bloodseeker","Ursa"],
            "attack_type":"mili",
            "like":["Io","Dazzle","Winter Wyvern","Crystal Maiden","Lion","Disruptor","Oracle","Ogre Magi","Magnus","Axe","Tidehunter","Sand King"],
            "have_control":false,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":0,
                "max":0
            },
            "dmg_hand":{
                "min":53,
                "max":144
            },
            "speed_dmg":{
                "min":0.93,
                "max":1.69
            },
            "avrige_cd_skills":{
                "without_ult":[3.5],
                "ult":70
            } 
        },

        {
            "toggle":false,
            "id":41,
            "name":"Arc Warden",
            "image":ArcWarden,
            "head_attribute":"agility",
            "hp":{
                "min":700,
                "max":2440
            },
            "armor":{
                "min":0.4,
                "max":11.54
            },
            "early_game":0,
            "mid_game":0,
            "late_game":6,
            "hate_items":["Force Staff","Black King Bar","Diffusal Blade","Hurricane Pike"],
            "favorite_items":["Mjolnir","Boots of Travel","Hand of Midas","Power Treads","Monkey King Bar","Shadow Blade","Bloodthorn","Scythe of Vyse","Hurricane Pike","Silver Edge","Orchid Malevolence","Daedalus","Butterfly","Maelstorm","Manta Style"],
            "contr_pick":["Outworld Devourer","Venomancer","Viper","Terrorblade","Templar Assasin","Ancient Apparation","Huskar","Razor","Tinker","Shadow Fiend","Silencer","Enigma","Gyrocopter","Drow Ranger","Tiny"],
            "fear":["Broodmother","Lycan","Meepo","Phantom Lancer","Io","Naga Siren","Storm Spirit","Lone Druid","Anti Mage","Alchemist","Morphling","Chaos Knight","Weaver","Earth Spirit","Kunkka","Bristleback","Centaur Warrunner"],
            "attack_type":"range",
            "like":["Crystal Maiden","Huskar","Omniknight"],
            "have_control":false,
            "type_dmg_skills":["magic","physic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":115,
                "max":1840
            },
            "dmg_hand":{
                "min":46,
                "max":125
            },
            "speed_dmg":{
                "min":0.7,
                "max":1.2
            },
            "avrige_cd_skills":{
                "without_ult":[14.72,18.4,2],
                "ult":40
            } 
        },

        {
            "toggle":false,
            "id":42,
            "name":"Bloodseeker",
            "image":Bloodseeker,
            "head_attribute":"agility",
            "hp":{
                "min":680,
                "max":2240
            },
            "armor":{
                "min":5.52,
                "max":21.3
            },
            "early_game":2.5,
            "mid_game":2.5,
            "late_game":1,
            "hate_items":["Blade Mail","Spirit Vessel","Eul's Scepter of Divinity","Heaven's Halberd"],
            "favorite_items":["Black King Bar","Abyssal Blade","Blade Mail","Radiance","Monkey King Bar","Mjolnir","Sange and Yasha","Maelstorm","Power Treads","Butterfly","Aghanim's Scepter"],
            "contr_pick":["Huskar","Slark","Lycan","Visage","Anti Mage","Riki","Centaur Warrunner","Dark Seer","Pangolier","Phoenix","Night Stalker","Razor","Timbersaw","Weaver","Alchemist","Abaddon","Beastmaster"],
            "fear":["Tinker","Medusa","Storm Spirit","Lifestealer","Juggernaut","Io","Techies","Brewmaster","Zeus","Troll Warlord","Wraith King","Monkey King","Clockwerk","Viper","Batrider","Nature's Prophet","Tiny"],
            "attack_type":"mili",
            "like":["Omniknight","Silencer","Vengeful Spirit","Pudge","Magnus","Tiny"],
            "have_control":false,
            "type_dmg_skills":["magic","physic","pure"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":125,
                "max":350
            },
            "dmg_hand":{
                "min":55,
                "max":159
            },
            "speed_dmg":{
                "min":0.75,
                "max":1.47
            },
            "avrige_cd_skills":{
                "without_ult":[6,6],
                "ult":70
            } 
        },

        {
            "toggle":false,
            "id":43,
            "name":"Bounty Hunter",
            "image":BountyHunter,
            "head_attribute":"agility",
            "hp":{
                "min":600,
                "max":2040
            },
            "armor":{
                "min":7.36,
                "max":19.42
            },
            "early_game":4,
            "mid_game":2,
            "late_game":0,
            "hate_items":["Gem Of True Sight","Necronomicon","Eul's Scepter of Divinity","Lotus Orb","Manta Style","Guardian Greaves"],
            "favorite_items":["Phase boots","Desolator","Magic Wand","Vladimir's Offering","Aghanim's Scepter","Black King Bar","Solar Crest","Sange and Yasha","Guardian Greaves"],
            "contr_pick":["Riki","Clinkz","Alchemist","Night Stalker","Spectre","Mirana","Weaver","Shadow Fiend","Invoker","Bristleback","Warlock","Sniper","Drow Ranger"],
            "fear":["Naga Siren","Meepo","Omniknight","Enchantress","Phantom Lancer","Huskar","Abaddon","Troll Warlord","Necrophos","Ogre Magi"],
            "attack_type":"mili",
            "like":["Invoker","Templar Assassin","Tinker","Sniper","Arc Warden","Shadow Fiend","Queen of Pain","Clinkz","Slark","Nature's Prophet","Windranger","Ancient Apparation","Doom"],
            "have_control":false,
            "type_dmg_skills":["magic","physic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":220,
                "max":535
            },
            "dmg_hand":{
                "min":48,
                "max":137
            },
            "speed_dmg":{
                "min":0.74,
                "max":1.3
            },
            "avrige_cd_skills":{
                "without_ult":[8,3,15],
                "ult":4
            } 
        },

        {
            "toggle":false,
            "id":44,
            "name":"Broodmother",
            "image":Broodmother,
            "head_attribute":"agility",
            "hp":{
                "min":560,
                "max":2180
            },
            "armor":{
                "min":2.4,
                "max":15.39
            },
            "early_game":6,
            "mid_game":0,
            "late_game":0,
            "hate_items":["Spirit Vessel","Radiance","Crimson Guard","Mjollnir","Battle Fury","Rod of Atos","Blink Dagger"],
            "favorite_items":["Soul Ring","Diffusal Blade","Aghanim's Scepter","Black King Bar","Desolator","Assault Cuirass","Bloodthorn","Solar Crest","Monkey King Bar","Manta Style"],
            "contr_pick":["Invoker","Arc Warden","Outworld Devourer","Clockwerk","Zeus","Visage","Lone Druid","Tinker","Huskar","Nature's Prophet","Night Stalker","Silencer","Medusa","Death Prophet"],
            "fear":["Axe","Earthshaker","Kunkka","Meepo","Magnus","Sven","Legion Commander","Naga Siren","Monkey King","Void Spirit","Sand King","Necrophos","Jakiro"],
            "attack_type":"mili",
            "like":["Omniknight","Ogre Magi","Vengeful Spirit","Disruptor","Keep of the Light"],
            "have_control":false,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":70,
                "max":280
            },
            "dmg_hand":{
                "min":44,
                "max":270
            },
            "speed_dmg":{
                "min":0.7,
                "max":1.3
            },
            "avrige_cd_skills":{
                "without_ult":[11,6],
                "ult":45
            } 
        },

        {
            "toggle":false,
            "id":45,
            "name":"Clinkz",
            "image":Clinkz,
            "head_attribute":"agility",
            "hp":{
                "min":480,
                "max":1740
            },
            "armor":{
                "min":7.02,
                "max":19.55
            },
            "early_game":1,
            "mid_game":3,
            "late_game":2,
            "hate_items":["Gem Of True Sight","Ghost Scepter","Necronomicon","Ethereal Blade","Blade Mail"],
            "favorite_items":["Desolator","Bloodthorn","Orchid Malevolence","Black King Bar","Monkey King Bar","Aghanim's Scepter","Diffusal Blade","Daedalus"],
            "contr_pick":["Pangolier","Death Prophet","Visage","Enigma","Viper","Grimstroke","Beastmaster","Monkey King","Lina","Ember Spirit","Razor","Leshrac"],
            "fear":["Meepo","Phantom Lancer","Naga Siren","Bounty Hunter","Broodmother","Phanton Assassin","Enchantress","Terrorblade","Morphling","Troll Warlord","Abaddon"],
            "attack_type":"range",
            "like":["Drow Ranger","Bounty Hunter","Vengeful Spirit","Shadow Shaman","Ogre Magi","Naga Siren","Bloodseeker","Morphling","Slardar"],
            "have_control":false,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":0,
                "max":0
            },
            "dmg_hand":{
                "min":59,
                "max":212
            },
            "speed_dmg":{
                "min":0.75,
                "max":3.33
            },
            "avrige_cd_skills":{
                "without_ult":[90,0,17],
                "ult":80
            } 
        },

        {
            "toggle":false,
            "id":46,
            "name":"Drow Ranger",
            "image":DrowRanger,
            "head_attribute":"agility",
            "hp":{
                "min":560,
                "max":1660
            },
            "armor":{
                "min":0.2,
                "max":13.66
            },
            "early_game":1,
            "mid_game":2,
            "late_game":3,
            "hate_items":["Blink Dagger","Blade Mail","Heaven's Halberd","Eul's Scepter of Divinity","Rod of Atos","Silver Edge","Manta Style"],
            "favorite_items":["Hurricane Pike","Manta Style","Butterfly","Black King Bar","Silver Edge","Monkey King Bar","Daedalus","Satanic","Aghanim's Scepter"],
            "contr_pick":["Necrophos","Death Prophet","Lone Druid","Anti Mage","Weaver","Huskar","Bristleback","Terrorblade","Lina","Templar Assasin"],
            "fear":["Meepo","Phantom Lancer","Naga Siren","Bounty Hunter","Broodmother","Phanton Assassin","Enchantress","Terrorblade","Morphling","Troll Warlord","Abaddon"],
            "attack_type":"range",
            "like":["Crystal Maiden","Witch Doctor","Lion","Ancient Apparation","Jakiro","Venomancer","Earthshaker","Ogre Magi","Shadow Shaman","Sand King"],
            "have_control":false,
            "type_dmg_skills":["physic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":true,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":0,
                "max":0
            },
            "dmg_hand":{
                "min":49,
                "max":133
            },
            "speed_dmg":{
                "min":0.74,
                "max":1.35
            },
            "avrige_cd_skills":{
                "without_ult":[0,7.8,12],
                "ult":0
            } 
        },

        {
            "toggle":false,
            "id":47,
            "name":"Ember Spirit",
            "image":EmberSpirit,
            "head_attribute":"agility",
            "hp":{
                "min":620,
                "max":2120
            },
            "armor":{
                "min":2.52,
                "max":14.58
            },
            "early_game":2,
            "mid_game":2,
            "late_game":2,
            "hate_items":["Orchid Malevolence","Scythe of Vyse","Abbyssal Blade","Desolator","Daedalus"],
            "favorite_items":["Bottle","Daedalus","Aghanim's Scepter","Black King Bar","Desolator","Boots of Travel","Linken's Sphere","Radiance","Mjolnir","Spirit Vessel"],
            "contr_pick":["Phantom Lancer","Broodmother","Naga Siren","Templar Assasin","Kunkka","Windranger","Zeus"],
            "fear":["Huskar","Slark","Monkey King","Oracle","Techies","Silencer","Juggernaut","Troll Warlord","Lifestealer","Morphling","Legion Commander","Lone Druid"],
            "attack_type":"mili",
            "like":["Magnus","Dark Seer","Abaddon","Oracle","Omniknight","Dazzle"],
            "have_control":true,
            "type_dmg_skills":["magic","physic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":280,
                "max":1280
            },
            "dmg_hand":{
                "min":55,
                "max":134
            },
            "speed_dmg":{
                "min":0.75,
                "max":1.3
            },
            "avrige_cd_skills":{
                "without_ult":[8,6,35],
                "ult":11
            } 
        },

        {
            "toggle":false,
            "id":77,
            "name":"Ancient Apparition",
            "image":AncientApparition,
            "head_attribute":"intellect",
            "hp":{
                "min":600,
                "max":1700
            },
            "armor":{
                "min":2.2,
                "max":12.41
            },
            "early_game":2,
            "mid_game":2,
            "late_game":2,
            "hate_items":["Pipe of Insight","Black King Bar","Force Staff","Manta Style"],
            "favorite_items":["Arcane Boots","Eul's Scepter","Force Staff","Glimmer Cape","Aghanim's Scepter","Kaya","Rod of Atos","Spirit Vessel","Octarine Core"],
            "contr_pick":["Alchemist","Huskar","Morphling","Slark","Dazzle","Omniknight","Io","Bristleback","Troll Warlord","Monkey King","Winter Wyvern","Gyrocopter"],
            "fear":["Lycan","Phantom Lancer","Naga Siren","Anti Mage","Arc Warden","Brewmaster","Riki","Night Stalker","Weaver","Bane"],
            "attack_type":"range",
            "like":["Pudge","Ursa","Legion Commander","Faceless Void","Troll Warlord","Clinkz","Arc Warden","Drow Ranger","Invoker","Shadow Fiend"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":350,
                "max":1000
            },
            "dmg_hand":{
                "min":94,
                "max":294
            },
            "speed_dmg":{
                "min":0.7,
                "max":1.09
            },
            "avrige_cd_skills":{
                "without_ult":[7,1.5,3],
                "ult":40
            } 
        },

        {
            "toggle":false,
            "id":78,
            "name":"Bane",
            "image":Bane,
            "head_attribute":"intellect",
            "hp":{
                "min":660,
                "max":2160
            },
            "armor":{
                "min":4.68,
                "max":16.74
            },
            "early_game":4,
            "mid_game":2,
            "late_game":0,
            "hate_items":["Linken's Sphere","Orchid Malevolence","Glimmer Cape","Eul's Scepter of Divinity","Rod of Atos","Lotus Orb","Aeon Disk"],
            "favorite_items":["Aether Lense","Magic Wand","Glimmer Cape","Tranquil Boots","Force Staff","Blink Dagger","Aghanim's Scepter","Ghost Scepter"],
            "contr_pick":["Lifestealer","Juggernaut","Morphling","Ancient Apparation","Outworld Devourer","Windranger","Shadow Fiend","Pangolier","Snapfire","Timbersaw","Faceless Void","Bristleback"],
            "fear":["Meepo","Riki","Naga Siren","Phantom Lancer","Chaos Knight","Lycan","Brewmaster","Lone Druid","Io","Tidehunter","Wraith King","Vengeful Spirit","Dark Seer"],
            "attack_type":"range",
            "like":["Pudge","Mirana","Shadow Shaman","Treant Protector","Skywrath Mage","Invoker","Jakiro"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":false,
            "help":{
                "have":true
            },
            "dmg_procast":{
                "min":700,
                "max":1800
            },
            "dmg_hand":{
                "min":56,
                "max":139
            },
            "speed_dmg":{
                "min":0.72,
                "max":1.16
            },
            "avrige_cd_skills":{
                "without_ult":[13,11,13],
                "ult":100
            } 
        },

        {
            "toggle":false,
            "id":79,
            "name":"Batrider",
            "image":Batrider,
            "head_attribute":"intellect",
            "hp":{
                "min":760,
                "max":2440
            },
            "armor":{
                "min":2.4,
                "max":9.36
            },
            "early_game":5,
            "mid_game":1,
            "late_game":0,
            "hate_items":["Magic Wand","Linken's Sphere","Lotus Orb","Eul's Scepter of Divinity","Aeon Disk","Blade Mail"],
            "favorite_items":["Blink Dagger","Force Staff","Boots of Travel","Eul's Scepter","Black King Bar","Ghost Scepter","Shiva's Guard","Pipe of Insight"],
            "contr_pick":["Templar Assasin","Chen","Meepo","Timbersaw","Monkey King","Io","Troll Warlord","Keep of the Light","Tiny"],
            "fear":["Weaver","Lifestealer","Abaddon","Tidehunter","Omniknight","Slark","Huskar","Queen of Pain","Juggernaut","Venomancer","Legion Commander","Silencer","Crystal Maiden"],
            "attack_type":"range",
            "like":["Clockwerk","Dark Seer","Tiny","Enigma","Bloodseeker","Naga Siren","Vengeful Spirit"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":70,
                "max":505
            },
            "dmg_hand":{
                "min":38,
                "max":126
            },
            "speed_dmg":{
                "min":0.68,
                "max":0.93
            },
            "avrige_cd_skills":{
                "without_ult":[2.55,6,28.9],
                "ult":68
            } 
        },

        {
            "toggle":false,
            "id":80,
            "name":"Chen",
            "image":Chen,
            "head_attribute":"intellect",
            "hp":{
                "min":700,
                "max":1860
            },
            "armor":{
                "min":1.4,
                "max":11.14
            },
            "early_game":6,
            "mid_game":0,
            "late_game":0,
            "hate_items":["Shiva's Guard","Dagon","Hand of Midas","Mjollnir","Spirit Vessel","Radiance"],
            "favorite_items":["Mekansm","Guardian Greaves","Vladimir's Offering","Helm of Dominator","Pipe of Insight","Medallion of Courage","Aghanim's Scepter"],
            "contr_pick":["Beastmaster","Spectre","Clockwerk","Tinker","Shadow Demon","Juggernaut","Puck","Terrorblade","Arc Warden"],
            "fear":["Batrider","Meepo","Naga Siren","Viper","Troll Warlord","Omniknight","Venomancer","Sven","Slardar","Enigma","Earthshaker","Enchantress"],
            "attack_type":"range",
            "like":["Vengeful Spirit","Lycan","Dark Seer","Enigma","Axe","Ursa","Centaur Warrunner"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":false
            },
            "tower_dmg":true,
            "help":{
                "have":true,
                "hill":{
                    "min":250,
                    "max":950
                }
            },
            "dmg_procast":{
                "min":0,
                "max":0
            },
            "dmg_hand":{
                "min":44,
                "max":146
            },
            "speed_dmg":{
                "min":0.68,
                "max":1.03
            },
            "avrige_cd_skills":{
                "without_ult":[11,15,80],
                "ult":120
            } 
        },

        {
            "toggle":false,
            "id":81,
            "name":"Crystal Maiden",
            "image":CrystalMaiden,
            "head_attribute":"intellect",
            "hp":{
                "min":560,
                "max":1820
            },
            "armor":{
                "min":1.56,
                "max":8.98
            },
            "early_game":4,
            "mid_game":1,
            "late_game":1,
            "hate_items":["Pipe of Insight","Orchid Malevolence","Glimmer Cape","Black King Bar","Skull Basher"],
            "favorite_items":["Tranquil Boots","Glimmer Cape","Blink Dagger","Force Staff","Black King Bar","Aghanim's Scepter","Ghost Scepter","Rod of Atos"],
            "contr_pick":["Phantom Lancer","Meepo","Naga Siren","Broodmother","Slark","Storm Spirit","Chaos Knight","Troll Warlord","Timbersaw","Queen of Pain"],
            "fear":["Earth Spirit","Magnus","Juggernaut","Pudge","Outworld Devourer","Puck","Gyrocopter","Rubick","Tiny"],
            "attack_type":"range",
            "like":["Faceless Void","Enigma","Magnus","Wraith King","Tiny","Juggernaut","Ursa","Drow Ranger","Phantom Assasin","Slark","Monkey King"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":true
            },
            "dmg_procast":{
                "min":490,
                "max":1480
            },
            "dmg_hand":{
                "min":42,
                "max":143
            },
            "speed_dmg":{
                "min":0.68,
                "max":0.95
            },
            "avrige_cd_skills":{
                "without_ult":[6,6],
                "ult":90
            } 
        },

        {
            "toggle":false,
            "id":82,
            "name":"Dark Seer",
            "image":DarkSeer,
            "head_attribute":"intellect",
            "hp":{
                "min":600,
                "max":2380
            },
            "armor":{
                "min":4.92,
                "max":13.27
            },
            "early_game":2,
            "mid_game":3,
            "late_game":1,
            "hate_items":["Orchid Malevolence","Blade Mail","Eul's Scepter of Divinity"],
            "favorite_items":["Guardian Greaves","Pipe of Insight","Arcane Boots","Blink Dagger","Shiva's Guard","Crimson Guard","Lotus Orb","Helm of Dominator"],
            "contr_pick":["Phantom Lancer","Naga Siren","Terrorblade","Visage","Templar Assasin","Broodmother","Abaddon","Spectre","Chaos Knight","Dragon Knight","Luna","Omniknight","Venomancer"],
            "fear":["Anti Mage","Oracle","Faceless Void","Sven","Bloodseeker","Lone Druid","Ursa"],
            "attack_type":"mili",
            "like":["Sven","Tidehunter","Phoenix","Jakiro","Invoker","Ember Spirit","Spirit Bracker","Tiny","Treant Protector","Omniknight","Nix Assassin","Axe","Earth Spirit"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":50,
                "max":200
            },
            "dmg_hand":{
                "min":54,
                "max":149
            },
            "speed_dmg":{
                "min":0.66,
                "max":0.96
            },
            "avrige_cd_skills":{
                "without_ult":[30,9,10],
                "ult":100
            } 
        },

        {
            "toggle":false,
            "id":83,
            "name":"Dark Willow",
            "image":DarkWillow,
            "head_attribute":"intellect",
            "hp":{
                "min":600,
                "max":1760
            },
            "armor":{
                "min":1.88,
                "max":9.3
            },
            "early_game":1,
            "mid_game":3,
            "late_game":2,
            "hate_items":["Pipe of Insight","Blade Mail","Manta Style","Force Staff","Hurricane Pike","Black King Bar","Eul's Scepter of Divinity"],
            "favorite_items":["Eul's Scepter","Aghanim's Scepter","Blink Dagger","Glimmer Cape","Force Staff","Guardian Greaves","Aether Lense","Ghost Scepter"],
            "contr_pick":["Lone Druid","Medusa","Sven","Pangolier","Centaur Warrunner","Faceless Void","Ember Spirit","Grimstroke","Monkey King","Earth Spirit","Templar Assasin"],
            "fear":["Naga Siren","Broodmother","Pugna","Queen of Pain","Juggernaut","Zeus","Axe","Anti Mage","Lifestealer"],
            "attack_type":"range",
            "like":["Mars","Sven","Pudge","Beastmaster","Wraith King","Ursa","Juggernaut","Bloodseeker","Legion Commander"],
            "have_control":true,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":false
            },
            "dmg_procast":{
                "min":300,
                "max":600
            },
            "dmg_hand":{
                "min":53,
                "max":154
            },
            "speed_dmg":{
                "min":0.91,
                "max":1.27
            },
            "avrige_cd_skills":{
                "without_ult":[20,14,12,30],
                "ult":80
            } 
        },

        {
            "toggle":false,
            "id":84,
            "name":"Dazzle",
            "image":Dazzle,
            "head_attribute":"intellect",
            "hp":{
                "min":560,
                "max":2000
            },
            "armor":{
                "min":2.36,
                "max":10.25
            },
            "early_game":4,
            "mid_game":2,
            "late_game":0,
            "hate_items":["Spirit Vessel","Black King Bar","Orchid Malevolence","Diffusal Blade"],
            "favorite_items":["Guardian Greaves","Force Staff","Glimmer Cape","Aether Lense","Spirit Vessel","Solar Crest","Aghanim's Scepter"],
            "contr_pick":["Spectre","Centaur Warrunner","Lycan","Pudge","Bristleback","Timbersaw","Sven","Lifestealer","Ember Spirit"],
            "fear":["Phantom Lancer","Ancient Apparation","Morphling","Outworld Devourer","Terrorblade","Pangolier","Troll Warlord","Naga Siren","Axe"],
            "attack_type":"range",
            "like":["Huskar","Monkey King","Sven","Ursa","Wraith King","Slark"],
            "have_control":false,
            "type_dmg_skills":["magic"],
            "mass_dmg":{
                "have":true
            },
            "tower_dmg":false,
            "help":{
                "have":true,
                "hill":{
                    "min":80,
                    "max":170
                }
            },
            "dmg_procast":{
                "min":230,
                "max":300
            },
            "dmg_hand":{
                "min":47,
                "max":160
            },
            "speed_dmg":{
                "min":0.71,
                "max":1
            },
            "avrige_cd_skills":{
                "without_ult":[18,18,6],
                "ult":0
            } 
        }
    ],
    "items":[
        {
            'name':"Aeon Disk",
            'img':AeonDisk
        },
        {
            'name':"Vladmir's Offering",
            'img':VladmirsOffering
        },
        {
            'name':"Veil of Discord",
            'img':VeilofDiscord
        },
        {
            'name':"Urn of Shadows",
            'img':UrnofShadows
        },
        {
            'name':"Spirit Vessel",
            'img':SpiritVessel
        },
        {
            'name':`Linken's Sphere`,
            'img':LinkensSphere
        },
        {
            'name':'Gem Of True Sight',
            'img':GemOfTrueSight
        },
        {
            'name':'Abbyssal Blade',
            'img':AbbyssalBlade
        },
        {
            'name':'Drum of Endurance',
            'img':DrumofEndurance
        },
        {
            'name':'Arcane Boots',
            'img':ArcaneBoots
        },
        {
            'name':'Assault Cuirass',
            'img':AssaultCuirass
        },
        {
            'name':'Aether Lens',
            'img':AetherLens
        },
        {
            'name':'Skull Basher',
            'img':SkullBasher
        },
        {
            'name':'Battle Fury',
            'img':BattleFury
        },
        {
            'name':'Black King Bar',
            'img':BlackKingBar
        },
        {
            'name':'Blade Mail',
            'img':BladeMail
        },
        {
            'name':'Blink Dagger',
            'img':BlinkDagger
        },
        {
            'name':'Butterfly',
            'img':Butterfly
        },
        {
            'name':'Crimson Guard',
            'img':CrimsonGuard
        },
        {
            'name':`Eul's Scepter of Divinity`,
            'img':EulsScepterofDivinity
        },
        {
            'name':'Dagon',
            'img':Dagon
        },
        {
            'name':'Diffusal Blade',
            'img':DiffusalBlade
        },
        {
            'name':'Desolator',
            'img':Desolator
        },
        {
            'name':'Echo Sabre',
            'img':EchoSabre
        },
        {
            'name':'Ethereal Blade',
            'img':EtherealBlade
        },
        {
            'name':'Force Staff',
            'img':ForceStaff
        },
        {
            'name':'Ghost Scepter',
            'img':GhostScepter
        },
        {
            'name':'Glimmer Cape',
            'img':GlimmerCape
        },
        {
            'name':'Daedalus',
            'img':Daedalus
        },
        {
            'name':'Guardian Greaves',
            'img':GuardianGreaves
        },
        {
            'name':'Hand of Midas',
            'img':HandofMidas
        },
        {
            'name':'Heart of Tarrasque',
            'img':HeartofTarrasque
        },
        {
            'name':`Heaven's Halberd`,
            'img':HeavensHalberd
        },
        {
            'name':'Hurricane Pike',
            'img':HurricanePike
        },
        {
            'name':'Shadow Blade',
            'img':ShadowBlade
        },
        {
            'name':'Kaya and Sange',
            'img':KayaandSange
        },
        {
            'name':'Lotus Orb',
            'img':LotusOrb
        },
        {
            'name':'Magic Wand',
            'img':MagicWand
        },
        {
            'name':'Manta Style',
            'img':MantaStyle
        },
        {
            'name':'Mekansm',
            'img':Mekansm
        },
        {
            'name':'Mask of Madness',
            'img':MaskofMadness
        },
        {
            'name':'Meteor Hammer',
            'img':MeteorHammer
        },
        {
            'name':'Monkey King Bar',
            'img':MonkeyKingBar
        },
        {
            'name':'Mjollnir',
            'img':Mjollnir
        },
        {
            'name':'Necronomicon',
            'img':Necronomicon
        },
        {
            'name':'Pipe of Insight',
            'img':PipeofInsight
        },
        {
            'name':'Orchid Malevolence',
            'img':OrchidMalevolence
        },
        {
            'name':'Radiance',
            'img':Radiance
        },
        {
            'name':'Divine Rapier',
            'img':DivineRapier
        },
        {
            'name':'Rod of Atos',
            'img':RodofAtos
        },
        {
            'name':'Sange and Yasha',
            'img':SangeandYasha
        },
        {
            'name':'Satanic',
            'img':Satanic
        },
        {
            'name':'Scythe of Vyse',
            'img':ScytheofVyse
        },
        {
            'name':`Shiva's Guard`,
            'img':ShivasGuard
        },
        {
            'name':'Silver Edge',
            'img':SilverEdge
        },
        {
            'name':'Eye of Skadi',
            'img':EyeofSkadi
        },
        {
            'name':'Solar Crest',
            'img':SolarCrest
        },
        {
            'name':'Vanguard',
            'img':Vanguard
        }
    ]
}