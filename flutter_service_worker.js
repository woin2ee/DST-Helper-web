'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_bootstrap.js": "95318af929ac601af69c665acd6976ea",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"main.dart.js": "e9af690edbe6eeecf59080e6937f538a",
"version.json": "1d0fe8ed804bf198c586573b8d427ef7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "a746d9cbef2bb51727505533df736e70",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "02c56da166cb52fea63d6b1a7635d0aa",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "a740229d3d430189bb3ba036011d6735",
"assets/FontManifest.json": "783afd9f58b18ceebbf557ae4f705ffa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "8e306d5a0db9dba6c8ec5823286a85f4",
"assets/assets/images/nutrients_compost_icon.png": "e6622260cbfed062e40ec0b066ee17bf",
"assets/assets/images/giant_carrots.png": "bc156af74307385f3b826f2245627022",
"assets/assets/images/sanity_meter.png": "68dfb20d3706fcb07dcbfd970e69d6e0",
"assets/assets/images/compost_overlay_full.png": "861d8307839acceda24087d8f4cc50d4",
"assets/assets/images/frame_2_thin.png": "b34c5c6fefb180271ac9584325d1e6de",
"assets/assets/images/bg_loading_loading_charlie2.png": "3a6c83276b4b165651ffd2eb9a7f1d0b",
"assets/assets/images/giant_dragon_fruit.png": "56672e1c4b6dc302d11a313ab6a4e658",
"assets/assets/images/nutrients_manure_icon.png": "cd8ef7a9eb4f3678493d29cede79b393",
"assets/assets/images/nutrients_growth_formula_icon.png": "3ab1c2583474df457f27300d8f9c2d02",
"assets/assets/images/manure_overlay_full.png": "e376d9521e631a8082e0e44282d9d4de",
"assets/assets/images/crock_pot.png": "85386866dd831df3a3ff7f36b891f5fc",
"assets/assets/images/growth_formula_overlay_full.png": "85d7b330824534a3ac3097b13131002e",
"assets/assets/images/health_meter.png": "2a36ccb9506f76a9abd6b6f34d9d89c0",
"assets/assets/images/items/beefalo_treats.png": "9040a75d5360766e3f1a06012458db72",
"assets/assets/images/items/toma_root_seeds.png": "4845ea6f413812cc19725e800664f728",
"assets/assets/images/items/eggplant_seeds.png": "6f7d3806ada855a08cf885fd33e9b178",
"assets/assets/images/items/guano.png": "835a2cf4b46d858125c04a4ce94b9e46",
"assets/assets/images/items/kelp_fronds.png": "443b3e7f894e00d1700ad19377ac88ee",
"assets/assets/images/items/grilled_watermelon.png": "976444720898d5b002e6803edf6a693c",
"assets/assets/images/items/foliage.png": "39d532e78da2a24abdd43b7611b42ef2",
"assets/assets/images/items/leafy_meats.png": "07cc515c02849d8c595722d3c34fa5be",
"assets/assets/images/items/tree_jam.png": "3c610bb47b51f75611114123a06d7cd7",
"assets/assets/images/items/watermelon.png": "a21d3486451f78a284c6a62c4e7c7e4e",
"assets/assets/images/items/blue_cap.png": "8a3190ef885cdaedc2c8d7eebafe49a9",
"assets/assets/images/items/nightmare_fuel.png": "018a9a92daed76b5e0cee3772e891ee2",
"assets/assets/images/items/bacon_and_eggs.png": "32bb53489817aad0a911f23357f3a84b",
"assets/assets/images/items/seeds.png": "beeafec9472d569ffd8ae2888a13b8d4",
"assets/assets/images/items/winter_koalefant_trunk.png": "a1cf1264f10977e40e20a93cd30ad7ad",
"assets/assets/images/items/ratatouille.png": "821f5007b98d6b7a4f0df0484e9da8de",
"assets/assets/images/items/braised_eggplant.png": "e2104a3ebc3a6d166957179dc39cf5a3",
"assets/assets/images/items/mandrake_soup.png": "4ee0b044bc7d41997bdefbaedb271327",
"assets/assets/images/items/tallbird_eggs.png": "de7ebda56ab59de4fff3e492cfb812be",
"assets/assets/images/items/crops_seeds.png": "6bd2c8fe89881560ad864ea9d10c7f30",
"assets/assets/images/items/frog_legs.png": "822b2807fc3b6993c275266529616baa",
"assets/assets/images/items/potato_seeds.png": "236024dcd32a58495a5182ab3b6babdf",
"assets/assets/images/items/twigs.png": "dd01b74cb6b9b4ad94f2123bf8f29134",
"assets/assets/images/items/salsa_fresca.png": "ac1604f39400989f0631f0067a147b06",
"assets/assets/images/items/royal_jelly.png": "0b00872fa3c450124754f23f48b9e44b",
"assets/assets/images/items/volt_goat_chaud_froid.png": "2e991c5c8a7b234b8afb0cca179d6bd9",
"assets/assets/images/items/fish.png": "42f2c7a5396918173b18b27d86466ebf",
"assets/assets/images/items/leafy_meatloaf.png": "97a92bf4fce1ca1db7db630ab100a7e9",
"assets/assets/images/items/mashedpotatoes.png": "324378ef54a496b377ca4118a7f87516",
"assets/assets/images/items/barnacle_linguine.png": "2adf1907c8608e74e3270dbb07ca0698",
"assets/assets/images/items/surf_n_turf.png": "058374838ca22e93e0d1fb746ffd9fdf",
"assets/assets/images/items/durian_seeds.png": "69f24abcd61d43015dc85d4c6706ee8a",
"assets/assets/images/items/kabobs.png": "0d5986c9a5c797f437f9dd26384f26fe",
"assets/assets/images/items/corn.png": "b519bb921257364a345273f555fdec66",
"assets/assets/images/items/moon_moth_wings.png": "c7e3ae415a6ffc9dd3beabb7f1204f0a",
"assets/assets/images/items/pumpkin_seeds.png": "1da33490e76d7136457b8b2c1e7aafe8",
"assets/assets/images/items/figatoni.png": "832c6dc81c7ad1e5dc7f33a9a2714d24",
"assets/assets/images/items/cactus_flower.png": "92ae6ce446cc64024fd27b87858b3119",
"assets/assets/images/items/popcorn.png": "ae2cf9c455164feb1c80fe546671f141",
"assets/assets/images/items/inedible.png": "5ee2cac326b35bb916b33a6c78721fdc",
"assets/assets/images/items/sweetener.png": "1d2eff7ba4b96b5bc0bf075e954393ef",
"assets/assets/images/items/ripe_stone_fruit.png": "3ce73abfabe27bf115840a00b49cd638",
"assets/assets/images/items/dairy_product.png": "365a3a655d9b8cda471330a58c1d7d6f",
"assets/assets/images/items/fish_cordon_bleu.png": "c98b2807e3c3997038cc1e771cc89239",
"assets/assets/images/items/hot_pumpkin.png": "aa299c7b14f0e6fc0f33469e7cc562ad",
"assets/assets/images/items/moqueca.png": "d4c4aa25aae4f57b6dc1d7c2cf4f030e",
"assets/assets/images/items/spoiled_fish_morsel.png": "b381abb727d2b80b6c6ea62c11e7c701",
"assets/assets/images/items/honey_ham.png": "e31ea1daa8818449e8d7c8bc983b4c32",
"assets/assets/images/items/froggle_bunwich.png": "926bcb716e3524cc84c29cd7b436c8fd",
"assets/assets/images/items/breakfast_skillet.png": "8f02a97e2444c86fe7dd2bc84feba4bb",
"assets/assets/images/items/grim_galette.png": "16688291b9238f07fcc0a25710d656c1",
"assets/assets/images/items/stuffed_pepper_poppers.png": "84c2153c8b4687a169087b79bbe09773",
"assets/assets/images/items/steamed_twigs.png": "d22af9d823ff103a4c8dffa23f0699b4",
"assets/assets/images/items/milky_whites.png": "cfd07f70fed2fd997985b5d9d3eeead3",
"assets/assets/images/items/milkmade_hat.png": "0b631dd57835c3bd3a0901db3b2ff3e6",
"assets/assets/images/items/jellybeans.png": "6b1b2dc27795ef37d64589bceb7bb66d",
"assets/assets/images/items/bucket-o-poop.png": "5c6b17d20e89eece3c7a2a4822cb0648",
"assets/assets/images/items/eggs.png": "0a0496fe61f2a916872f7521f05bfc99",
"assets/assets/images/items/pumpkin_cookie.png": "548c75a41d8da85e9c129415fe9d56bb",
"assets/assets/images/items/growth_formula_starter.png": "7eff74eeebdd1ee1f519870eede2eb27",
"assets/assets/images/items/lichen.png": "5d78f28cfba36e6966a4f1a8b747143d",
"assets/assets/images/items/pierogi.png": "715f19fbf89ee771b2d633077fb1e72d",
"assets/assets/images/items/pomegranate_seeds.png": "00c7e205dc9b9f0281c9207aa96fd90e",
"assets/assets/images/items/figkabab.png": "073eb2ef88541a0b7fe76cf0f2b20d8d",
"assets/assets/images/items/plain_omelette.png": "835e10c3796a447f5e38f24ea1906793",
"assets/assets/images/items/glow_berry.png": "61e44e0f26b972c91c3ef69f873bab0d",
"assets/assets/images/items/raw_fish.png": "de970e5bea109db9fffb8e0c2686a00f",
"assets/assets/images/items/vegetable_stinger.png": "a29fb33ad90d87b664a2273fb5267071",
"assets/assets/images/items/tillweeds.png": "21e25e1bfea9946c4132e139e22dc299",
"assets/assets/images/items/fire_nettle_fronds.png": "bcc495566d3e86320c40227cf82f50fa",
"assets/assets/images/items/leafy_meat.png": "74d0b08cfeeb82019d12358229581083",
"assets/assets/images/items/monster_lasagna.png": "8126c6fac034e8d42712880dbe846a3d",
"assets/assets/images/items/veggie_burger.png": "9e6ff296db26e079f6293f4a4b7d0cb1",
"assets/assets/images/items/monster_tartare.png": "a2c80bdc02868ffd7d4d82112d4aa94d",
"assets/assets/images/items/wet_goop.png": "3028c93d684e63203057c2da44a9f8ee",
"assets/assets/images/items/ice_cream.png": "f0dfe15f4d2aac4325f4afea2e07b9fe",
"assets/assets/images/items/carrot_seeds.png": "6f2f19fea2c05f0a162d64533e4aaeb0",
"assets/assets/images/items/stuffed_eggplant.png": "bbc93da6560c5f412a5fd76809f9005f",
"assets/assets/images/items/toasted_seeds.png": "e3c72cf913545ece1b1e020034e2101e",
"assets/assets/images/items/spicy_chili.png": "09284d48adaf4905e4fbc5af1df2d53f",
"assets/assets/images/items/hot_dragon_chili_salad.png": "2c4752f2d76e678eae925f8ce3149027",
"assets/assets/images/items/fruit_medley.png": "874f123d0c960197a3d7350c1ca63b97",
"assets/assets/images/items/beefy_greens.png": "702b04497c1fef9fae4a3a0ee93003cf",
"assets/assets/images/items/vegetables.png": "c46402ececb6a71ea675c4eface5865b",
"assets/assets/images/items/bunny_stew.png": "68cfcfaaf4a0a39aafc0ebcb1dc262f1",
"assets/assets/images/items/electric_milk.png": "71a2bf1d2c5eeb07e7db61069b9dcf3f",
"assets/assets/images/items/melonsicle.png": "5e0c03bdbf03a1414664aa3624db2c23",
"assets/assets/images/items/dead_wobster.png": "e9c634ae385679c98b4ef67346290f72",
"assets/assets/images/items/red_cap.png": "64f4b963bb7ba3df53885289b0d93332",
"assets/assets/images/items/soothing_tea.png": "0dd765282011122491d4a39f3ed71ead",
"assets/assets/images/items/butterfly_wings.png": "b9035eb2b038319284b0d9fd8a02c9b3",
"assets/assets/images/items/butter_muffin.png": "1d6261a026a4ceae93f6e796f63c7797",
"assets/assets/images/items/super_growth_formula.png": "300fb9d2e492d18e2f07171f4955835c",
"assets/assets/images/items/seafood_gumbo.png": "a26e24a7c727968e3bad7815cd498347",
"assets/assets/images/items/asparagazpacho.png": "1b4fdcb4dfd9edda66e912eef99dd126",
"assets/assets/images/items/fishes.png": "4ca2cbbf55496da5a664145e205b6b07",
"assets/assets/images/items/fish_steak.png": "5f5f0c223b67e9c50974836a42bb4777",
"assets/assets/images/items/rotten_egg.png": "7781c72482a1cab92320745dd305d802",
"assets/assets/images/items/manure.png": "e3830c0e85311a91c7fbe75d005694e0",
"assets/assets/images/items/flower_salad.png": "4973b790a0a841458a0c3f16343c6e0b",
"assets/assets/images/items/garlic.png": "a3122620cb59736835d9992a1b1ba380",
"assets/assets/images/items/banana_shake.png": "8c9fac33b6a6ec765cb7e6ff34273155",
"assets/assets/images/items/drumstick.png": "b6e55cb93ba6f7d0a6444d38bf886efa",
"assets/assets/images/items/monster_meats.png": "dd410f7270b3d10ad004070043790375",
"assets/assets/images/items/fig.png": "afce69a3009621baa8ab2a5b7308a796",
"assets/assets/images/items/onion_seeds.png": "7f4cee0d4063d61c205d4369b74c0597",
"assets/assets/images/items/light_bulb.png": "33596bbec40ee24ce0d059e9e12f6b4d",
"assets/assets/images/items/pepper.png": "47168f0332cedaaf0206f560c69d9026",
"assets/assets/images/items/durian.png": "4c430fd11b607b278fa9783e06d61c18",
"assets/assets/images/items/lesser_glow_berry.png": "ed78d19a93f69f987a9b275bf388ae4c",
"assets/assets/images/items/phlegm.png": "084b240f2e5f6222b61fb4c146a39022",
"assets/assets/images/items/eels.png": "8a409e465897411bea7fd697d832eca6",
"assets/assets/images/items/collected_dust.png": "28d3e6ef1cd99a38609d1c95b6f4bd79",
"assets/assets/images/items/fish_morsel.png": "14f4ac21c52731a8804ce7e5afeaac70",
"assets/assets/images/items/green_cap.png": "da14867a2ac1222cb7255a929225aa09",
"assets/assets/images/items/dried_kelp_fronds.png": "2d28e8e35d1338c80e2828db944b0c86",
"assets/assets/images/items/figgy_frogwich.png": "474107ec053c53d21cd791a37351701a",
"assets/assets/images/items/carrot.png": "31d5a73a74fdae341822815f5553bdae",
"assets/assets/images/items/extra_smelly_durian.png": "2aadc0f9ec5350418a3cf6dacec875ba",
"assets/assets/images/items/mandrake.png": "89755d60fc7b535ed37b2e0b6149fbea",
"assets/assets/images/items/onion.png": "4031e0a0928b4b89e68ac4ea90d5d116",
"assets/assets/images/items/powdercake.png": "40f6eb7efd5dcb8af3ba8ec16ebf7f2d",
"assets/assets/images/items/tall_scotch_eggs.png": "bc54c7df2772fb0e8826315299be68e6",
"assets/assets/images/items/toma_roots.png": "87a7d240ba9ae210fb914dacde8c72b4",
"assets/assets/images/items/dragonpie.png": "604a599a2ec2d002d5723608d4c4d286",
"assets/assets/images/items/asparagus_seeds.png": "bd768bc3323ee0b248f6e035cc8df05a",
"assets/assets/images/items/amberosia.png": "4b0bfae4a8d2ca83f5410e787ccbf8d5",
"assets/assets/images/items/pumpkin.png": "29cb08a494d8a835b42ce8bd8fe15b72",
"assets/assets/images/items/california_roll.png": "6f545d12b20ee8024a614816e032343e",
"assets/assets/images/items/corn_seeds.png": "b8af960c48deb9b8e7a02a9f9ca6f74e",
"assets/assets/images/items/batilisk_wing.png": "15f3c78626a15421dcffe1b9b13801bc",
"assets/assets/images/items/fig_stuffed_trunk.png": "d812c8dc2252d95377e6bb4d8d88e0bd",
"assets/assets/images/items/moon_shroom.png": "06ed66b27e62243e31a8b76ffc60dd57",
"assets/assets/images/items/trail_mix.png": "93a307a5c35756a911895b98c25f1101",
"assets/assets/images/items/morsel.png": "ad95fc4a1512d33142941c7433715fd0",
"assets/assets/images/items/meaty_stew.png": "977d720570090345700a84b158ae0610",
"assets/assets/images/items/stuffed_night_cap.png": "5e52d2fa9f4cd22627477ad6783a9387",
"assets/assets/images/items/fancy_spiralled_tubers.png": "59569ae66d94c08b518d392defaadf12",
"assets/assets/images/items/wobster_dinner.png": "324161d82d7089978d7ad0c5383cc24e",
"assets/assets/images/items/spiny_bindweed.png": "ead8822fdd46206d3a3f67a93deb55fb",
"assets/assets/images/items/banana_pop.png": "4868e40605a7fe437029405ebf170137",
"assets/assets/images/items/barnacle_nigiri.png": "76c545d8df06db7fdd9576d22db14e78",
"assets/assets/images/items/bone_bouillon.png": "5d59ae45188c82aa42c77c1158f861ce",
"assets/assets/images/items/dragon_fruit.png": "27f31b680603305ce331f2db3b7e16be",
"assets/assets/images/items/glow_berry_mousse.png": "00841124d857d4224f3806bdaf02e931",
"assets/assets/images/items/compost.png": "794c66ae9bca550f4dfa969c58ac9196",
"assets/assets/images/items/toma_root.png": "d1b65cb14d87625188f245c5e5dc209f",
"assets/assets/images/items/meatballs.png": "0c6349703ad04f331a6585fdb6c69557",
"assets/assets/images/items/succulent.png": "2e32bc48b9c0f3d17adaf1722007e891",
"assets/assets/images/items/puffed_potato_souffle.png": "e8500ad43619eb985de42039809ef8c3",
"assets/assets/images/items/fermenting_growth_formula.png": "730dfdcda7af6b134364359a8e205bfd",
"assets/assets/images/items/waffles.png": "91391b191b3dbe26f7804d75f5576074",
"assets/assets/images/items/ice.png": "756f52dd2cfd944bcdb47e56f9a268ea",
"assets/assets/images/items/berries.png": "82f31c9386a862137208b4c1ebe1a80e",
"assets/assets/images/items/popperfish_land.png": "3486a38b3150942f2cfdce6d0269bcd7",
"assets/assets/images/items/unagi.png": "60a6db9800cc3e13e73da5b0f6eb5528",
"assets/assets/images/items/eggplants.png": "f8eeac081bd477f5b4108e0deeae38d6",
"assets/assets/images/items/birchnut.png": "37238e346353b305587b9063b57f808b",
"assets/assets/images/items/cave_bananas.png": "358ea27f1a354f74c327ed341a9a73da",
"assets/assets/images/items/fishsticks.png": "ce00b91c6d173f011fb728aed385bf99",
"assets/assets/images/items/butter.png": "b98ad9533d4334633fa7c2b53178039a",
"assets/assets/images/items/taffy.png": "ee5136b68a92929f075927640eb20002",
"assets/assets/images/items/meat.png": "59af88d0210a3ed840771383d82705f5",
"assets/assets/images/items/turkey_dinner.png": "07eee3fdd2cc0708ecafeb6fa1f3548b",
"assets/assets/images/items/compost_wrap.png": "be8046d81db94fa4afef56d21be5797d",
"assets/assets/images/items/naked_nostrils.png": "7bb0e55e88d654f21493b2517d5ed3fa",
"assets/assets/images/items/guacamole.png": "3547de5881a3112d5f861b9194105a6b",
"assets/assets/images/items/eel.png": "b69bb7e575db12133aa754a3d54acdb8",
"assets/assets/images/items/egg.png": "8cf3d68184e1e0dc106cc65333798e6d",
"assets/assets/images/items/watermelon_seeds.png": "51d4e92baacd6b655f5f3e72368b31e8",
"assets/assets/images/items/eggplant.png": "f86b7469b62a722567941608cd99acb5",
"assets/assets/images/items/koalefant_trunks.png": "974bd0e5a132000cf74c6a7dd54c72e3",
"assets/assets/images/items/onions.png": "f094bf050df6185850a4a6d230364bb8",
"assets/assets/images/items/potato.png": "61e672cf3ed266923d2f975e359e7d28",
"assets/assets/images/items/cooked_wobster.png": "5dcf2d38d6c3a112230bcca6a4b52328",
"assets/assets/images/items/lune_tree_blossom.png": "7ba4688a7c4f94b84f99c497560c7ef4",
"assets/assets/images/items/honey_nuggets.png": "a85e3c622e81176c50a0adc5a489ab60",
"assets/assets/images/items/fruits.png": "2efe3a2aa34c72d60c3e41eefc649d7e",
"assets/assets/images/items/meats.png": "e662d38099ac8367b8d049582168cfb8",
"assets/assets/images/items/tallbird_egg.png": "889eb3d05ca2b49bf76b9dbfcd3984f5",
"assets/assets/images/items/koalefant_trunk.png": "aeb41c2fe9553c44e99959422561e763",
"assets/assets/images/items/monster_meat.png": "c55bd1d777dfdf76806d75ea8e72565f",
"assets/assets/images/items/asparagus_soup.png": "c3e9558fb3edc5fb613d1d1b85c8b8ff",
"assets/assets/images/items/barnacle_pita.png": "476ac5dad275a785bdac723305679b50",
"assets/assets/images/items/barnacles.png": "f262c72ca7ef95b687e1364448ca38ab",
"assets/assets/images/items/fermented_growth_formula.png": "338c0f4dd58451276e55b79cff0d4829",
"assets/assets/images/items/honey.png": "cd8512536272c43a3b69236738eae23e",
"assets/assets/images/items/spoiled_fish.png": "08f77cc10c9be9e4dfe861af84afed63",
"assets/assets/images/items/figs.png": "db4c4a25cdc10828c6f5e8f0c967b2df",
"assets/assets/images/items/jelly_salad.png": "3d8f96e4c581b389695dd663294bfeec",
"assets/assets/images/items/pomegranate.png": "31ffe57ec0ea75645a6ee2c63ced2c13",
"assets/assets/images/items/sliced_pomegranate.png": "10efe8b2b2ce8cb95dab6f2e2b81f543",
"assets/assets/images/items/wobster.png": "17efdae6ff8b74686f4bd1563606f060",
"assets/assets/images/items/dragon_fruit_seeds.png": "52929c19b2c87be426786a7722cf4ca1",
"assets/assets/images/items/mushy_cake.png": "2c36564fb1735e118ae0724d3d7062cf",
"assets/assets/images/items/prepared_dragon_fruit.png": "b218c21fb47f8ff1c9771e764b79f681",
"assets/assets/images/items/moleworm.png": "f497f4fed0278498c2ddfce090446350",
"assets/assets/images/items/fish_tacos.png": "545e5ed0bdd20b58ec84f3ac4187c8b9",
"assets/assets/images/items/glommer_fuel.png": "ab4aa218106edc52458be43b329685e3",
"assets/assets/images/items/monster_foods.png": "ffc8ccaa6ead81a65fcbcc0c1188e704",
"assets/assets/images/items/small_jerky.png": "abf10b7eb5c2d73ed744d1e40b34c5f1",
"assets/assets/images/items/frozen_banana_daiquiri.png": "85778cf199f90af5e4c9e036fad4f137",
"assets/assets/images/items/forget_me_lots.png": "84950523cffbb1ed02cefaccd2e4e531",
"assets/assets/images/items/deerclops_eyeball.png": "69541870327fdd3b31e7ff9811413b58",
"assets/assets/images/items/dark_petals.png": "9ce8b5e0f35688b40ead421ecb73e187",
"assets/assets/images/items/stuffed_fish_heads.png": "5ebee26044ae9446c9cc940af8132c01",
"assets/assets/images/items/fresh_fruit_crepes.png": "da7d9592e7025ab53ee6d60d2513f523",
"assets/assets/images/items/wobster_bisque.png": "c230dfd4cebe72f48cc8f114557a3908",
"assets/assets/images/items/cactus_flesh.png": "ef3203bec1ca1624f5c1ae87564f15a4",
"assets/assets/images/items/fist_full_of_jam.png": "21960d7646b1cae1ba523ea05667990a",
"assets/assets/images/items/roasted_birchnut.png": "4b1323a7d4fe210a75e45abde11b790f",
"assets/assets/images/items/rot.png": "d5e437d6d96a535c7bca9281da56fe69",
"assets/assets/images/items/petals.png": "7d66c715228019668df588d2a7224526",
"assets/assets/images/items/none.png": "483a7c7f8cc7fbe91ee77cd3f6cfa2d5",
"assets/assets/images/items/cave_banana.png": "e2b0c45423f95e5974f1b30f6b7778d6",
"assets/assets/images/items/garlic_seeds.png": "ebe07ba814a867dfc9957be3c5fda2aa",
"assets/assets/images/items/ceviche.png": "73780779942d0e82f22275709f41a47a",
"assets/assets/images/items/peppers.png": "868787574b31808d94348b0c7935f268",
"assets/assets/images/items/pepper_seeds.png": "f6a37811213a5121a6aa9672fa25beda",
"assets/assets/images/items/asparagus.png": "7b85395e8a6c50fd68a1fead47d931e5",
"assets/assets/images/items/juicy_berries.png": "0a749cb6ae5e20ce9713f373852722c2",
"assets/assets/images/items/charred_nostrils.png": "fcba34a7fe0fd12a9cb8adec320c0f79",
"assets/assets/images/hunger_meter.png": "97da8ecd490756b228b622e63ca9c84c",
"assets/assets/images/priority.png": "8eb66c81e8f7d5bd10c4367f8d34ba6e",
"assets/assets/images/frame_2_thick.png": "0d18b900d380a70bb38b78cb0c43b840",
"assets/assets/images/season_table.png": "47d517293bb0067c50b151a85470e8e7",
"assets/assets/images/frame_1.png": "f77a9c1a5cc7a7909441f611e10dd1f0",
"assets/assets/images/rot.png": "d5e437d6d96a535c7bca9281da56fe69",
"assets/assets/fonts/PretendardVariable.ttf": "872a6c5775ec910058a9a409a201972a",
"assets/assets/custom_icon/CustomIcon.ttf": "36e2910c5ba995e21eb422b032b0a755",
"assets/NOTICES": "6688372c5f05e2ca2314edbd2d66d5a2",
"assets/AssetManifest.bin": "71d2ecf6e6a19f20982ca8d646dec4a8",
"assets/fonts/MaterialIcons-Regular.otf": "ea6538f0a9ce18184715d2ce8dc512ed",
"assets/AssetManifest.bin.json": "e18980ace3dd99fa6a8ee4b4bba5155d",
"favicon.png": "a63431ffa5b0df37ba6a41846719d302",
"index.html": "64e8ab507f40efe1342c891fb1bc6144",
"/": "64e8ab507f40efe1342c891fb1bc6144",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
