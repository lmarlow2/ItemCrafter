var weaponTypes = ["Club	1 sp	1d4	Bludgeoning	2 lbs	Simple Melee Weapon	5ft.	Light",
                   "Dagger	2 gp	1d4	Piercing	1 lbs	Simple Melee Weapon	5 ft.	Finesse, light, thrown (range 20/60)",
                   "Great Club	2 sp	1d8	Bludgeoning	10 lbs	Simple Melee Weapon	5ft.	Two-handed",
                   "Handaxe	5 gp	1d6	Slashing	2 lbs	Simple Melee Weapon	5 ft.	Light, thrown (range 20/60)",
                   "Javelin	5 sp	1d6	Piercing	2 lbs	Simple Melee Weapon	5 ft.	Thrown (range 30/120)",
                   "Light Hammer	2 gp	1d4	Bludgeoning	2 lbs	Simple Melee Weapon	5 ft.	Light, thrown (range 20/60)",
                   "Mace	5 gp	1d6	Bludgeoning	4 lbs	Simple Melee Weapon	5 ft.	",
                   "Quarterstaff	2 sp	1d6	Bludgeoning	4 lbs	Simple Melee Weapon	5 ft.	Versatile (1d8)",
                   "Sickle	1 gp	1d4	Slashing	2 lbs	Simple Melee Weapon	5 ft.	Light",
                   "Spear	1 gp	1d6	Piercing	3 lbs	Simple Melee Weapon	5ft.	Thrown (range 20/60), versatile (1d8)",
                   "Light Crossbow	25 gp	1d8	Piercing	5 lbs	Simple Ranged Weapon	80/320 ft	Ammunition (crossbow bolts), loading, two-handed",
                   "Dart	5 cp	1d4	Piercing	1/4 lbs	Simple Ranged Weapon	20/60 ft.	Finesse, thrown",
                   "Shortbow	25 gp	1d6	Piercing	2 lbs	Simple Ranged Weapon	80/320 ft.	Ammunition (arrows), two-handed",
                   "Sling	1 sp	1d4	Bludgeoning	-	Simple Ranged Weapon	30/120 ft.	Ammunition (small objects)",
                   "Battleaxe	10 gp	1d8	Slashing	4 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Flail	10 gp	1d8	Bludgeoning	2 lbs	Martial Melee Weapon	5 ft.	",
                   "Glaive	20 gp	1d10	Slashing	6 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Greataxe	30 gp	1d12	Slashing	7 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Greatsword	50 gp	2d6	Slashing	6 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Halberd	20 gp	1d10	Slashing	6 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Lance	10 gp	1d12	Piercing	6 lbs	Martial Melee Weapon	10 ft.	Reach, You have disadvantage when you use a lance to Attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren’t mounted",
                   "Longsword	15 gp	1d8	Slashing	3 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Maul	10 gp	2d6	Bludgeoning	10 lbs	Martial Melee Weapon	5 ft.	Heavy, two-handed",
                   "Morningstar	15 gp	1d8	Piercing	4 lbs	Martial Melee Weapon	5 ft.	",
                   "Pike	5 gp	1d10	Piercing	18 lbs	Martial Melee Weapon	10 ft.	Heavy, reach, two-handed",
                   "Rapier	25 gp	1d8	Piercing	2 lbs	Martial Melee Weapon	5 ft.	Finesse",
                   "Scimitar	25 gp	1d6	Slashing	3 lbs	Martial Melee Weapon	5 ft.	Finesse, light",
                   "Shortsword	10 gp	1d6	Piercing	2 lbs	Martial Melee Weapon	5 ft.	Finesse, light",
                   "Trident	5 gp	1d6	Piercing	4 lbs	Martial Melee Weapon	5 ft.	Thrown (range 20/60), versatile (1d8)",
                   "War Pick	5 gp	1d8	Piercing	2 lbs	Martial Melee Weapon	5 ft.	",
                   "Warhammer	15 gp	1d8	Bludgeoning	2 lbs	Martial Melee Weapon	5 ft.	Versatile (1d10)",
                   "Whip	2 gp	1d4	Slashing	3 lbs	Martial Melee Weapon	10 ft.	Finesse, reach",
                   "Blowgun	10 gp	1	Piercing	1 lbs	Martial Ranged Weapon	25/100 ft.	Ammunition (blowdarts), loading",
                   "Hand Crossbow	75 gp	1d6	Piercing	3 lbs	Martial Ranged Weapon	30/120 ft.	Ammunition (crossbow bolts), light, loading",
                   "Heavy Crossbow	50 gp	1d10	Piercing	18 lbs	Martial Ranged Weapon	100/400 ft.	Ammunition (crossbow bolts), heavy, loading, two-handed",
                   "Longbow	50 gp	1d8	Piercing	2 lbs	Martial Ranged Weapon	150/600	Ammunition (arrows), heavy, two-handed",
                   "Net	1 gp	-	-	3 lbs	Martial Ranged Weapon	5/15 ft.	Thrown, A Large or smaller creature hit by a net is Restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are Huge or larger. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net. When you use an action, Bonus Action, or reaction to Attack with a net, you can make only one Attack regardless of the number of attacks you can normally make.",
                   "Flintlock Pistol	50 gp	1d10	Piercing	1 lbs	Martial Ranged Weapon	60/120 ft.	Smoothbore penalty (-5 to hit), ammunition (lead shot), loading",
                   "Flintlock Rifle	100 gp	3d4	Piercing	3 lbs	Martial Ranged Weapon	100/400 ft.	Smoothbore penalty (-2 to hit), ammunition (lead shot), loading",
                   "Blunder Bus	75 gp	3d4	Piercing	2 lbs	Martial Ranged Weapon	15 ft.	Smoothbore penalty (-7 to hit), ammunition (small objects), loading, damages all creatures in a 15 ft. diameter cone in front of the user"
];

weaponProperties = [ "Increase the damage die from d4 to d6. You can select this property again to increase the damage die of a ranged weapon or a martial weapon to a d8.",
                    "(Melee only.) You use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls. Optional Limitations: This property cannot be combined with the Heavy or Versatile properties. This property cannot be combined with the brutal property when applied to a simple weapon.",
                    "(Martial only.) Increase the damage die from a d4 to a d8, a d6 to a d10 or a d8 to d12. This weapon gains the Two-handed property if it didn't have it already. Small creatures have disadvantage on attack rolls with this weapon. Limitation: This property cannot increase a ranged weapon's damage dice to a d12.",
                    "(Melee only.) This weapon is ideal for two-weapon fighting. This cannot be combined with the heavy property. Optional Limitation: This property can only be applied to weapons with a damage die of d4 or d6. This property can't be combined with the versatile property",
                    "(Ranged only.) Remove the Two-handed property. Limitation: This counts as two properties for a simple ranged weapon.",
                    "(Ranged only.) Remove the Loading property.",
                    "(Martial melee only.) Your reach increase by 5 feet when using the weapon. Limitation: This counts as two properties unless the weapon has the Heavy property.",
                    "(Ranged only.) Increase the range of a simple ranged weapon to 80/320. Increase the range of a martial ranged weapon to 150/600.",
                    "(Melee only.) You can throw this weapon to make a ranged attack with a range of 20/60. You use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. You can select this property again to increase the range to 30/120. Limitation: This can only be applied to weapons with a damage die of d4 or d6.",
                    "(Melee only.) This weapon can be used with one or two hands. Increase the damage die for melee attacks when wielded with two hands from a d4 to a d6, from a d6 to a d8, or from a d8 to a d10. This cannot be combined with the Heavy property."
];

function newItem(){
  var weaponInfoID = Math.floor(Math.random() * (weaponTypes.length - 1));
  var weapon = weaponTypes[weaponInfoID].split("\t");
  document.getElementById("weaponName").innerHTML = weapon[0];
  document.getElementById("weaponClass").innerHTML = weapon[5];
  document.getElementById("weaponDamage").innerHTML = weapon[2];
  document.getElementById("weaponDamageType").innerHTML = weapon[3];
  document.getElementById("weaponRange").innerHTML = weapon[6];
  document.getElementById("weaponProperties").innerHTML = weapon[7];
  document.getElementById("weaponWeight").innerHTML = weapon[4];
  document.getElementById("weaponValue").innerHTML = weapon[1];
  document.getElementById("enchantmentName").innerHTML = "Enchantment.";
  document.getElementById("enchantmentEffect").innerHTML = "Enchantment Effect Text.";
  document.getElementById("loreText").innerHTML = "The history of how this item came to be, who made it, who used it, battles whose outcomes it changed, etc...";
}

function updateInfoBox(id){
  var select = document.getElementById(id);
  var textarea = document.getElementById(id + "Info");
  textarea.innerHTML = weaponProperties[select.selectedIndex];
}
