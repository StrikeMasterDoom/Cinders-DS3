// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    RegisterBonfire(14100000, 4101950, 5, 180, 0); // Flameless Shrine
    RegisterBonfire(14100001, 4101951, 5, 180, 0); // Kiln of the First Flame
    InitializeEvent(0, 14100100, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14100101, 0); // Fire Keeper - Setup
    InitializeEvent(0, 14105500, 0); // Warp to Kiln path
    InitializeEvent(0, 14105200, 0); // Toggle Cutscene Hollow
    
    // Soul of Cinder
    InitializeEvent(0, 14100800, 0); // Boss Kill
    InitializeEvent(0, 14105810, 0); // Setup
    InitializeEvent(0, 14105811, 0); // Switch Fighting Style
    InitializeEvent(0, 14105812, 0); // Sitting Animation
    InitializeEvent(0, 14005829, 0); // Common Setup
    
    InitializeCommonEvent(20005840, 4101800); // Handle Fog Wall for Player
    InitializeCommonEvent(20005841, 4101800); // Handle Fog Wall for Client Player
    InitializeEvent(1, 14105520, 10012051, 4101521);
    InitializeEvent(2, 14105520, 10012052, 4101522);
    InitializeEvent(3, 14105520, 10012053, 4101523);
    InitializeEvent(4, 14105520, 10012054, 4101524);
    InitializeEvent(5, 14105520, 10012055, 4101525);
    
    // Yuria of Londor - Summon
    InitializeCommonEvent(20005700, 14100800, 14104190, 14105190, 4100190, 4102190);
    InitializeCommonEvent(20005720, 14104190, 14105190, 14100800, 4100190);
    InitializeCommonEvent(20005711, 14104190, 14105805, 4100190, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005713, 74000640, 14100800, 14104190, 14105190, 4100190);
    InitializeCommonEvent(20005714, 14104190, 14105805, 4100190, 4102806, 14100801);
    
    // Londor Pale Shade - Summon
    InitializeCommonEvent(20005700, 14100800, 14104191, 14105191, 4100191, 4102191);
    InitializeCommonEvent(20005720, 14104191, 14105191, 14100800, 4100191);
    InitializeCommonEvent(20005711, 14104191, 14105805, 4100191, 4102800, 4102805, 14100801);
    InitializeCommonEvent(20005714, 14104191, 14105805, 4100191, 4102806, 14100801);
    
    InitializeEvent(0, 14100050, 0); // Cinders Script
});

Event(50, Default, function() {
    SetMapSoundState(4104800, Disabled);
    SetMapSoundState(4104801, Disabled);
    SetMapSoundState(4104802, Disabled);
    SetEventFlag(14105100, OFF);
    InitializeEvent(0, 14105510, 0);
    InitializeEvent(0, 14100050, 0); // Cinders Script
});

// Cinders Setup
Event(14100050, Restart, function() {
    EndIfMultiplayerState(EventEndType.End, MultiplayerState.Client);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 2052);
    
    // One-time Enemies
    InitializeCommonEvent(20008100, 14100810, 4100810, 13400); // Lord Erectus
    
    // Chests
    InitializeCommonEvent(20005520, 14101200, 4101200, 4104300);
    InitializeCommonEvent(20005520, 14101201, 4101201, 4104301);
    InitializeCommonEvent(20005520, 14101202, 4101202, 4104302);
    InitializeCommonEvent(20005520, 14101203, 4101203, 4104303);
    InitializeCommonEvent(20005520, 14101204, 4101204, 4104304);
    
    // NPC Kill Emotes
    InitializeCommonEvent(20009201, 4100810, 85000); // Lord Erectus
    
    // Lord Erectus - Anti-fall
    InitializeCommonEvent(20021000, 4100810, 4104810, 4104820, 525312, 220);
    
    // Hitless Check
    InitializeEvent(0, 14100051, 0);
    
    // Companions
    InitializeCommonEvent(20080000, 4100750, 14100750) // Setup - Solaire of Astora
    InitializeCommonEvent(20080001, 4100750, 14100750, 160760000, 160760211) // Summon - Solaire of Astora
    
    InitializeCommonEvent(20080000, 4100751, 14100751) // Setup - El Crabbo
    InitializeCommonEvent(20080001, 4100751, 14100751, 160760001, 160761100) // Summon - El Crabbo
    
    InitializeCommonEvent(20080000, 4100752, 14100752) // Setup - Wolf
    InitializeCommonEvent(20080001, 4100752, 14100752, 160760002, 160761110) // Summon - Wolf
    
    // Curses
    InitializeCommonEvent(20081000, 4105750, 25000005); // Curse of Attraction
    InitializeCommonEvent(20081010, 4105760, 250001002, 25000004); // Curse of Pride
    InitializeCommonEvent(20081010, 4105760, 250001102, 25000003); // Curse of Wrath
    InitializeCommonEvent(20081010, 4105760, 250001402, 25000002); // Curse of Vitality
    InitializeCommonEvent(20081010, 4105760, 250001602, 25000006); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4105760, 250001202, 25000008); // Curse of Frailty
    
    // Covenants
    InitializeCommonEvent(20081020, 4105760, 160100400, 160100403); // Company of Champions
    
    // Trial of Perseverance
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25008101)
    InitializeEvent(0, 14006000, 0);
    
    SetEventFlag(25008100, OFF); // Trial Warp flag
    SetEventFlag(25008101, OFF); // Trial Warp flag
    SetEventFlag(25008102, OFF); // Trial Warp flag
     
    // Disable Generators
    InitializeEvent(0, 14006006, 0); 
});

// Fire Keeper - Setup
Event(14100100, Default, function() {
    ActivateHit(4104101, Disabled);
    ChangeCharacterEnableState(4100100, Disabled);
    SetCharacterAnimationState(4100100, Disabled);
    SetEventFlag(74100100, OFF);
    SetEventFlag(100, OFF);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 9920, 9923);
    IfEventFlag(AND_01, OFF, TargetEventFlagType.EventFlag, 50006020);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14101100);
    IfConditionGroup(MAIN, PASS, AND_01);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14105100);
    CreateObjectfollowingSFX(4101100, 0, 30001);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 101);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9341, 4101100);
    IfConditionGroup(MAIN, PASS, AND_02);
    DisplayGenericDialogAndSetEventFlags(10012020, PromptType.YESNO, NumberofOptions.TwoButtons, 4101100, 3, 100, 14105100, 14105100);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, 100);
    SetEventFlag(100, ON);
    SetEventFlag(101, OFF);
    SetSpeffect(10000, 4900);
    SetSpeffect(10000, 4901);
    SetCharacterImmortality(10000, Enabled);
    SetCharacterImmortality(4100100, Enabled);
    DeleteObjectfollowingSFX(4101100, true);
    ActivateHit(4104100, Disabled);
    ActivateHit(4104103, Enabled);
    WaitFixedTimeFrames(1);
    PlayOngoingCutsceneAndWarpPlayer(41000060, CutscenePlayMode.Skippable, 4102110, 41, 0, 10000, 0, 0);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(4100100, Enabled);
    SetCharacterAnimationState(4100100, Enabled);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    DeactivateObject(4101952, Disabled);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    ActivateHit(4104103, Disabled);
    ActivateHit(4104101, Enabled);
    ActivateHit(4104102, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4100100, 30004, true, false, false, 0, 1);
    IfOngoingCutsceneFinished(MAIN, 4102110);
    IfDamageType(OR_02, 4100100, 10000, DamageType.Unspecified);
    IfConditionGroup(OR_03, PASS, OR_02);
    IfElapsedSeconds(OR_03, 10);
    IfConditionGroup(MAIN, PASS, OR_03);
    SkipIfConditionGroupStateCompiled(1, PASS, OR_02);
    SetEventFlag(74100100, ON);
    SetSpeffect(10000, 4902);
    GotoIfConditionGroupStateCompiled(Label.LABEL0, PASS, OR_02);
    WaitFixedTimeSeconds(4.2);
    AwardAchievement(2);
    DisableLoadingScreenTips(true);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    SetEventFlag(110, ON);
    SetEventFlag(9922, ON);
    SetEventFlag(22, ON);
    SetEventFlag(6400, ON);
    ClearSpeffect(10000, 4902);
    EndUnconditionally(EventEndType.End);
    Label0();
    PlayCutsceneToPlayer(41000070, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    HideHud(true);
    SetNetworkInteractionState(Enabled);
    DisableLoadingScreenTips(true);
    SetEventFlag(110, ON);
    SetEventFlag(9923, ON);
    SetEventFlag(23, ON);
    SetEventFlag(6400, ON);
    ClearSpeffect(10000, 4902);
    EndUnconditionally(EventEndType.End);
    InitializeCommonEvent(20011400, 0);
});

// Fire Keeper - Setup
Event(14100101, Default, function() {
    SetEventFlag(101, OFF);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    EndIfBatchEventFlags(EventEndType.End, LogicalOperationType.NotAllOFF, TargetEventFlagType.EventFlag, 9920, 9923);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14101100);
    IfConditionGroup(MAIN, PASS, AND_01);
    DeactivateObject(4101952, Enabled);
    ForceAnimationPlayback(4101952, 11, true, false, false, 0, 1);
    IfEventFlag(AND_02, OFF, TargetEventFlagType.EventFlag, 100);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9342, 4101952);
    IfConditionGroup(MAIN, PASS, AND_02);
    DisplayGenericDialogAndSetEventFlags(10012021, PromptType.YESNO, NumberofOptions.TwoButtons, 4101952, 3, 101, 14105101, 14105101);
    EndIfEventFlag(EventEndType.Restart, OFF, TargetEventFlagType.EventFlag, 101);
    SetEventFlag(101, ON);
    SetEventFlag(100, OFF);
    ForceAnimationPlayback(4101952, 1, false, false, false, 0, 1);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 490, 9230, 4);
    WaitFixedTimeFrames(1);
    IfEventValue(AND_09, 9230, 4, ComparisonType.Equal, 8);
    GotoIfConditionGroupStateUncompiled(Label.LABEL0, PASS, AND_09);
    PlayCutsceneToPlayer(41000000, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    AwardAchievement(1);
    DisableLoadingScreenTips(true);
    SetEventFlag(9920, ON);
    SetEventFlag(20, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndUnconditionally(EventEndType.End);
    Label0();
    SkipIfEventFlag(2, OFF, TargetEventFlagType.EventFlag, 9013);
    PlayCutsceneToPlayer(41000050, CutscenePlayMode.Unskippable, 10000);
    SkipUnconditionally(1);
    PlayCutsceneToPlayer(41000051, CutscenePlayMode.Unskippable, 10000);
    WaitFixedTimeFrames(1);
    AwardAchievement(3);
    DisableLoadingScreenTips(true);
    SetEventFlag(9921, ON);
    SetEventFlag(21, ON);
    SetEventFlag(110, ON);
    SetEventFlag(6400, ON);
    EndUnconditionally(EventEndType.End);
});

Event(14105520, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    IfActionButtonInArea(MAIN, 9356, X4_4);
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);
    EndUnconditionally(EventEndType.Restart);
});

// Warp to Kiln path
Event(14105500, Default, function() {
    IfActionButtonInArea(MAIN, 9343, 4101101);
    RotateCharacter(10000, 4101101, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(41, 0, 4100120);
});

Event(14105510, Restart, function() {
    DeactivateObject(4106102, Disabled);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14100511);
    EndIfConditionGroupStateUncompiled(EventEndType.End, FAIL, AND_01);
    DeactivateObject(4106102, Enabled);
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 14100512);
    SetEventFlag(14100512, ON);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_02, false);
    IfMultiplayerState(AND_02, MultiplayerState.LeavingSession);
    IfActionButtonInArea(AND_02, 9344, 4101102);
    IfConditionGroup(MAIN, PASS, AND_02);
    SendAllPhantomsHome(0);
    RotateCharacter(10000, 4101102, 91040, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(50, 0, 5002110);
    SetEventFlag(14100510, ON);
});

// Toggle Cutscene Hollow
Event(14105200, Restart, function() {
    ChangeCharacterEnableState(4100200, Disabled); // Hollow
});

// Soul of Cinder Kill
Event(14100800, Default, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    IfCharacterHPRatio(MAIN, 4100800, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    WaitFixedTimeSeconds(3);
    PlaySE(4100800, SoundType.s_SFX, 777777777);
    IfCharacterDeadalive(MAIN, 4100800, DeathState.Dead, ComparisonType.Equal, 1);
    HandleBossDefeatAndDisplayBanner(4100800, TextBannerType.LordofCinderFallen);
    SetEventFlag(14100800, ON);
    SetEventFlag(14101100, ON);
    SetEventFlag(9321, ON);
    SetEventFlag(6321, ON);
    SpawnOneshotSFX(TargetEntityType.Object, 4101952, 200, 1060);
    InitializeCommonEvent(20020018, 0); // Boss Kill
});

// Soul of Cinder - Setup
Event(14105810, Restart, function() {
    GotoIfEventFlag(Label.LABEL0, OFF, TargetEventFlagType.EventFlag, 14100800);
    ForceCharacterDeath(4100800, false);
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAIState(4100800, Disabled);
    EndUnconditionally(EventEndType.End);
    
    Label0();
    SetCharacterAIState(4100800, Disabled);
    GotoIfEventFlag(Label.LABEL1, ON, TargetEventFlagType.EventFlag, 14100801);
    IfPlayerIsNotInOwnWorldExcludesArena(AND_01, false);
    IfEntityInoutsideRadiusOfEntity(AND_01, InsideOutsideState.Inside, 4100800, 10000, 40, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14100801, ON);
    ForceAnimationPlayback(4100800, 1700, false, true, false, 0, 1);
    GotoUnconditionally(Label.LABEL2);
    
    Label1();
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, 14105805);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, 4102800, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    
    Label2();
    SetNetworkconnectedEventFlag(14100801, ON);
    SetNetworkconnectedEventFlag(14105807, ON);
    SetCharacterAIState(4100800, Enabled);
    DisplayBossHealthBar(Enabled, 4100800, 0, 905280);
    SetNetworkUpdateRate(4100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    InitializeCommonEvent(20020118, 0); // Boss Start
    
    EndIfPlayerIsNotInOwnWorldExcludesArena(EventEndType.End, true);
    SetNetworkUpdateAuthority(4100800, AuthorityLevel.Forced);
});

// Soul of Cinder - Switch Fighting Style
Event(14105811, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14105802);
    SetCharacterImmortality(4100800, Enabled);
    IfCharacterHPRatio(AND_01, 4100800, ComparisonType.LessOrEqual, 0.05, ComparisonType.Equal, 1);
    IfDamageType(AND_01, 4100800, 10000, DamageType.Unspecified);
    IfConditionGroup(MAIN, PASS, AND_01);
    SetNetworkconnectedEventFlag(14105803, ON);
    ForceAnimationPlayback(4100800, 20010, false, true, false, 0, 1);
    ForceAnimationPlayback(4100800, 20005, false, true, false, 0, 1);
    SetNetworkconnectedEventFlag(14105802, ON);
    SetCharacterImmortality(4100800, Disabled);
});

// Soul of Cinder - Sitting Animation
Event(14105812, Restart, function() {
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, 14100800);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14100801);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, 14100801);
    ForceAnimationPlayback(4100800, 700, false, false, false, 0, 1);
    Label0();
    IfObjectBackread(MAIN, 4101952, true, ComparisonType.Equal, 1);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4101952, 100000, false, false, false, 0, 1);
});

Event(14105813, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X16_4, Disabled);
    SetMapSoundState(X20_4, Disabled);
    EndIfEventFlag(EventEndType.End, ON, TargetEventFlagType.EventFlag, X0_4);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X4_4);
    SkipIfNumberOfClientsOfType(1, ClientType.Coop, ComparisonType.Equal, 0);
    IfEventFlag(AND_01, ON, TargetEventFlagType.EventFlag, X8_4);
    IfInoutsideArea(AND_01, InsideOutsideState.Inside, 10000, X12_4, 1);
    IfConditionGroup(MAIN, PASS, AND_01);
    EnableBossMapSound(X16_4, Enabled);
    Unknown201007(X20_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X24_4);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, X0_4);
    IfConditionGroup(MAIN, PASS, OR_01);
    GotoIfEventFlag(Label.LABEL0, ON, TargetEventFlagType.EventFlag, X0_4);
    EnableBossMapSound(X20_4, Enabled);
    IfEventFlag(MAIN, ON, TargetEventFlagType.EventFlag, X0_4);
    Label0();
    EnableBossMapSound(-1, Disabled);
});

// Soul of Cinder - Common Setup
Event(14005829, Restart, function() {
    InitializeCommonEvent(20005800, 14100800, 4101800, 4102800, 14105805, 4101800, 4100800, 14100801, 0);
    InitializeCommonEvent(20005801, 14100800, 4101800, 4102800, 14105805, 4101800, 14105806);
    SkipIfNumberOfClientsOfType(2, ClientType.Invader, ComparisonType.Equal, 0);
    InitializeCommonEvent(20001836, 14100800, 14105805, 14105806, 14105807, 4104800, 4104801, 14105802); // Sound State
    SkipUnconditionally(1);
    InitializeCommonEvent(20005831, 14100800, 14105805, 14105806, 4102800, 4104800, 4104801, 14105802);
    InitializeCommonEvent(20005820, 14100800, 4101800, 4, 14100801);
    InitializeCommonEvent(20005810, 14100800, 4101800, 4102800, 10000);
});

Event(14005900, Restart, function() {
    SetEventFlag(74000120, ON);
    SetEventFlag(14101100, ON);
    ClearSpeffect(10000, 4900);
    ClearSpeffect(10000, 4901);
    SetNetworkInteractionState(Enabled);
    HideHud(true);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 100);
    IfEventFlag(OR_01, ON, TargetEventFlagType.EventFlag, 101);
    IfConditionGroup(MAIN, PASS, OR_01);
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAnimationState(4100800, Disabled);
});

//--------------------------------------------------------------
// Trial Map State
//--------------------------------------------------------------
Event(14009000, Restart, function() {
    SetMapCeremony(40, 0, 0);
    
    // fogwall: 4101800
    DeactivateObject(4101800, Enabled);
    DeleteObjectfollowingSFX(4101800, true);
    CreateObjectfollowingSFX(4101800, 101, 4);
    
    // soc: 4100800
    ChangeCharacterEnableState(4100800, Disabled);
    SetCharacterAnimationState(4100800, Disabled);
    
    // firekeeper: 4100100
    ChangeCharacterEnableState(4100100, Disabled);
    SetCharacterAnimationState(4100100, Disabled);
    
    // bonfire: 4101952
    DeactivateObject(4101952, Disabled);
});

//--------------------------------------------------------------
// Trial of Perseverance
//--------------------------------------------------------------
Event(14006000, Restart, function() {
    InitializeEvent(0, 14009000, 0);
    
    InitializeEvent(0, 14006001, 0); // Trial
    InitializeEvent(0, 14006005, 0); // Setup Wave Entity
    
    InitializeEvent(0, 14006010, 0); // Enemy Wave Damage
    InitializeEvent(0, 14006011, 0); // Enemy Bug Check
    InitializeEvent(0, 14006012, 0); // Enemy Cleanup
    InitializeEvent(0, 14006020, 0); // Enemy - Curses
});

//-------------------------------
// Trial
//-------------------------------
Event(14006001, Default, function() {
    WaitFixedTimeSeconds(5.0);

    // Sound
    EnableBossMapSound(4104800, Enabled);
    
    //-------------------------------
    // Set 1
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(0, 14006004, 5300500, 260200100, 205000); // Wave 1
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(1, 14006004, 5300501, 260200101, 205001); // Wave 2
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(2, 14006004, 5300502, 260200102, 205002); // Wave 3
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000); // Tier 1
    InitializeCommonEvent(20081100, 800200000, 800200100, 800200200, 800200300); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 2
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(3, 14006004, 5300503, 260200103, 205003); // Wave 4
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(4, 14006004, 5300504, 260200104, 205004); // Wave 5
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(5, 14006004, 5300505, 260200105, 205005); // Wave 6

    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000); // Tier 1
    InitializeCommonEvent(20081100, 800200000, 800200100, 800200200, 800200300); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 3
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(6, 14006004, 5300506, 260200106, 205006); // Wave 7
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(7, 14006004, 5300507, 260200107, 205007); // Wave 8
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(8, 14006004, 5300508, 260200108, 205008); // Wave 9
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500000); // Tier 1
    InitializeCommonEvent(20081100, 800200000, 800200100, 800200200, 800200300); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 4
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(9, 14006004, 5300509, 260200109, 205009); // Wave 10
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(10, 14006004, 5300510, 260200110, 205010); // Wave 11
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(11, 14006004, 5300511, 260200111, 205011); // Wave 12
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500010); // Tier 2
    InitializeCommonEvent(20081100, 800200010, 800200110, 800200210, 800200310); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 5
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(12, 14006004, 5300512, 260200112, 205012); // Wave 13
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(13, 14006004, 5300513, 260200113, 205013); // Wave 14
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(14, 14006004, 5300514, 260200114, 205014); // Wave 15
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500010); // Tier 2
    InitializeCommonEvent(20081100, 800200010, 800200110, 800200210, 800200310); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 6
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(15, 14006004, 5300515, 260200115, 205015); // Wave 16
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(16, 14006004, 5300516, 260200116, 205016); // Wave 17
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(17, 14006004, 5300517, 260200117, 205017); // Wave 18
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500020); // Tier 3
    InitializeCommonEvent(20081100, 800200020, 800200120, 800200220, 800200320); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 7
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(18, 14006004, 5300518, 260200118, 205018); // Wave 19
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(19, 14006004, 5300519, 260200119, 205019); // Wave 20
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(20, 14006004, 5300520, 260200120, 205020); // Wave 21
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500020); // Tier 3
    InitializeCommonEvent(20081100, 800200020, 800200120, 800200220, 800200320); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 8
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(21, 14006004, 5300521, 260200121, 205021); // Wave 22
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(22, 14006004, 5300522, 260200122, 205022); // Wave 23
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(23, 14006004, 5300523, 260200123, 205023); // Wave 24
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030); // Tier 4
    InitializeCommonEvent(20081100, 800200030, 800200130, 800200230, 800200330); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 9
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(24, 14006004, 5300524, 260200124, 205024); // Wave 25
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(25, 14006004, 5300525, 260200125, 205025); // Wave 26
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(26, 14006004, 5300526, 260200126, 205026); // Wave 27
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030); // Tier 4
    InitializeCommonEvent(20081100, 800200030, 800200130, 800200230, 800200330); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 10
    //-------------------------------
    SetEventFlag(25005000, 0);
    SetEventFlag(25005001, 0);
    SetEventFlag(25005002, 0);
    RandomlySetEventFlagInRange(25005000, 25005002, ON);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005000);
    InitializeEvent(27, 14006004, 5300527, 260200127, 205027); // Wave 28
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005001);
    InitializeEvent(28, 14006004, 5300528, 260200128, 205028); // Wave 29
     
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25005002);
    InitializeEvent(29, 14006004, 5300529, 260200129, 205029); // Wave 30
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500030); // Tier 4
    InitializeCommonEvent(20081100, 800200030, 800200130, 800200230, 800200330); // Primordial
    
    WaitFixedTimeSeconds(10.0);

    //-------------------------------
    // Set 11
    //-------------------------------
    InitializeEvent(30, 14006004, 5300530, 260200130, 205030); // Wave 31
    
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    AwardItemsIncludingClients(800500040); // Tier 5
    InitializeCommonEvent(20081100, 800200040, 800200140, 800200240, 800200340); // Primordial
    WaitFixedTimeSeconds(10.0);
    
    WarpPlayer(40, 0, 4000970);
});

// Wave
Event(14006004, Default, function(X0_4, X4_4, X8_4) {
    SetSpeffect(5300500, X4_4); // HP Boost
    SetSpeffect(10000, 260200000); // Soul Boost
    SetSpeffect(10000, 260200001); // Item Discovery Boost
    DisplayBossHealthBar(Enabled, 5300500, 0, X8_4);
    DeactivateGenerator(X0_4, Enabled);
    
    //WaitFixedTimeSeconds(60.0);
    IfCharacterHPRatio(MAIN, 5300500, ComparisonType.LessOrEqual, 0, ComparisonType.Equal, 1);
    
    DisplayBossHealthBar(Disabled, 5300500, 0, 905290);
    DeactivateGenerator(X0_4, Disabled);
    //DisplayGenericDialog(99003011, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    //InitializeEvent(0, 15300202, 0); // Force Kill
    
    WaitFixedTimeSeconds(5.0);
    
    //DisplayGenericDialog(99003012, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
});

// Wave Entity Loop
Event(14006005, Default, function() {
    SetCharacterAIState(5300500, Disabled);
    SetCharacterGravity(5300500, Disabled);
    SetCharacterAnimationState(5300500, Disabled);
    WaitFixedTimeSeconds(1.0);
    EndUnconditionally(EventEndType.Restart);
});

// Toggle Generators
Event(14006006, Default, function() {
    DeactivateGenerator(5300500, Disabled);
    DeactivateGenerator(5300501, Disabled);
    DeactivateGenerator(5300502, Disabled);
    DeactivateGenerator(5300503, Disabled);
    DeactivateGenerator(5300504, Disabled);
    DeactivateGenerator(5300505, Disabled);
    DeactivateGenerator(5300506, Disabled);
    DeactivateGenerator(5300507, Disabled);
    DeactivateGenerator(5300508, Disabled);
    DeactivateGenerator(5300509, Disabled);
    DeactivateGenerator(5300510, Disabled);
    DeactivateGenerator(5300511, Disabled);
    DeactivateGenerator(5300512, Disabled);
    DeactivateGenerator(5300513, Disabled);
    DeactivateGenerator(5300514, Disabled);
    DeactivateGenerator(5300515, Disabled);
    DeactivateGenerator(5300516, Disabled);
    DeactivateGenerator(5300517, Disabled);
    DeactivateGenerator(5300518, Disabled);
    DeactivateGenerator(5300519, Disabled);
    DeactivateGenerator(5300520, Disabled);
    DeactivateGenerator(5300521, Disabled);
    DeactivateGenerator(5300522, Disabled);
    DeactivateGenerator(5300523, Disabled);
    DeactivateGenerator(5300524, Disabled);
    DeactivateGenerator(5300525, Disabled);
    DeactivateGenerator(5300526, Disabled);
    DeactivateGenerator(5300527, Disabled);
    DeactivateGenerator(5300528, Disabled);
    DeactivateGenerator(5300529, Disabled);
    DeactivateGenerator(5300530, Disabled);
});

// Enemy - Curse
Event(14006020, Default, function() {
    InitializeCommonEvent(20081010, 4105760, 250001002, 25000004); // Curse of Pride
    InitializeCommonEvent(20081010, 4105760, 250001102, 25000003); // Curse of Wrath
    InitializeCommonEvent(20081010, 4105760, 250001402, 25000002); // Curse of Vitality
    InitializeCommonEvent(20081010, 4105760, 250001602, 25000006); // Curse of Fortitude
    InitializeCommonEvent(20081010, 4105760, 250001202, 25000008); // Curse of Frailty
    
    WaitFixedTimeSeconds(1);
    
    EndUnconditionally(EventEndType.Restart);
});
 
// Enemy Wave Damage
Event(14006010, Default, function() {
    InitializeCommonEvent(20060010, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060010, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060010, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060010, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060010, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060010, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060010, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060010, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060010, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060010, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060010, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060010, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060010, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060010, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060010, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060010, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060010, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060010, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060010, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060010, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060010, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060010, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060010, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060010, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060010, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060010, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060010, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060010, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060010, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060010, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060010, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060010, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060010, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060010, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060010, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060010, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060010, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060010, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060010, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060010, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060010, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060010, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060010, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060010, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060010, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060010, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060010, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060010, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060010, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060010, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060010, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060010, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060010, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060010, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060010, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060010, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060010, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060010, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060010, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060010, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060010, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060010, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060010, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060010, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060010, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060010, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060010, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060010, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060010, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060010, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060010, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060010, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060010, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060010, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060010, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060010, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060010, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060010, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060010, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060010, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060010, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060010, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060010, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060010, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060010, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060010, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060010, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060010, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060010, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060010, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060010, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060010, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060010, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060010, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060010, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060010, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060010, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060010, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060010, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060010, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060010, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060010, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060010, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060010, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060010, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060010, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060010, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060010, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060010, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060010, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060010, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060010, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060010, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060010, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060010, 5300801, 260200019); // Cathedral Grave Warden
});

// Enemy Bug Check
Event(14006011, Default, function() {
    InitializeCommonEvent(20060011, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060011, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060011, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060011, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060011, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060011, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060011, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060011, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060011, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060011, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060011, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060011, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060011, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060011, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060011, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060011, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060011, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060011, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060011, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060011, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060011, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060011, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060011, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060011, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060011, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060011, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060011, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060011, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060011, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060011, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060011, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060011, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060011, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060011, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060011, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060011, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060011, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060011, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060011, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060011, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060011, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060011, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060011, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060011, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060011, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060011, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060011, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060011, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060011, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060011, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060011, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060011, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060011, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060011, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060011, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060011, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060011, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060011, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060011, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060011, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060011, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060011, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060011, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060011, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060011, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060011, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060011, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060011, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060011, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060011, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060011, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060011, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060011, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060011, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060011, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060011, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060011, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060011, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060011, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060011, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060011, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060011, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060011, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060011, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060011, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060011, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060011, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060011, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060011, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060011, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060011, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060011, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060011, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060011, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060011, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060011, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060011, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060011, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060011, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060011, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060011, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060011, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060011, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060011, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060011, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060011, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060011, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060011, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060011, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060011, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060011, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060011, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060011, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060011, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060011, 5300801, 260200019); // Cathedral Grave Warden
});

// Enemy Cleanup
Event(14006012, Default, function() {
    InitializeCommonEvent(20060012, 5300600, 260200010); // Skeleton - Scimitar
    InitializeCommonEvent(20060012, 5300601, 260200010); // Skeleton - Falchion
    InitializeCommonEvent(20060012, 5300602, 260200010); // Skeleton - Bow
    InitializeCommonEvent(20060012, 5300603, 260200010); // Skeleton - Firebomb
    InitializeCommonEvent(20060012, 5300604, 260200011); // Hollow Soldier - Straight Sword
    InitializeCommonEvent(20060012, 5300605, 260200011); // Hollow Soldier - Sword and Shield
    InitializeCommonEvent(20060012, 5300606, 260200011); // Hollow Soldier - Lantern
    InitializeCommonEvent(20060012, 5300607, 260200011); // Hollow Soldier - Crossbow
    InitializeCommonEvent(20060012, 5300608, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060012, 5300609, 260200011); // Hollow Soldier - Spear and Shield
    InitializeCommonEvent(20060012, 5300610, 260200012); // Large Hollow Soldier - Greataxe
    InitializeCommonEvent(20060012, 5300611, 260200012); // Large Hollow Soldier - Halberd
    InitializeCommonEvent(20060012, 5300612, 260200013); // Carthus Swordsman - Sword
    InitializeCommonEvent(20060012, 5300613, 260200013); // Carthus Swordsman - Greatsword
    InitializeCommonEvent(20060012, 5300614, 260200013); // Carthus Swordsman - Bow
    InitializeCommonEvent(20060012, 5300615, 260200013); // Carthus Swordsman - Shotel
    InitializeCommonEvent(20060012, 5300616, 260200014); // Cathedral Knight - Mace
    InitializeCommonEvent(20060012, 5300617, 260200014); // Cathedral Knight - Greatsword
    InitializeCommonEvent(20060012, 5300618, 260200015); // Hollow Slave - Axe
    InitializeCommonEvent(20060012, 5300619, 260200015); // Hollow Slave - Pick
    InitializeCommonEvent(20060012, 5300620, 260200015); // Hollow Slave - Flamberge
    InitializeCommonEvent(20060012, 5300621, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060012, 5300622, 260200016); // Ghru - Spear
    InitializeCommonEvent(20060012, 5300623, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060012, 5300624, 260200016); // Ghru - Curved Sword
    InitializeCommonEvent(20060012, 5300625, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060012, 5300626, 260200016); // Ghru - Dagger
    InitializeCommonEvent(20060012, 5300627, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060012, 5300628, 260200016); // Ghru - Mad
    InitializeCommonEvent(20060012, 5300629, 260200017); // Cathedral Evangelist
    InitializeCommonEvent(20060012, 5300630, 260200018); // Peasant Hollow - Axe
    InitializeCommonEvent(20060012, 5300631, 260200018); // Peasant Hollow - Lantern
    InitializeCommonEvent(20060012, 5300632, 260200018); // Peasant Hollow - Sickle 
    InitializeCommonEvent(20060012, 5300633, 260200018); // Peasant Hollow - Mallet
    InitializeCommonEvent(20060012, 5300634, 260200018); // Peasant Hollow - Hoe
    InitializeCommonEvent(20060012, 5300635, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060012, 5300636, 260200020); // Hollow Manservant - Saw
    InitializeCommonEvent(20060012, 5300637, 260200020); // Hollow Manservant - Pot
    InitializeCommonEvent(20060012, 5300638, 260200021); // Lothric Knight - Sword
    InitializeCommonEvent(20060012, 5300639, 260200021); // Lothric Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300640, 260200021); // Lothric Knight - Greatsword
    InitializeCommonEvent(20060012, 5300641, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060012, 5300642, 260200022); // Winged Knight - Halberd
    InitializeCommonEvent(20060012, 5300643, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060012, 5300644, 260200022); // Winged Knight - Twinaxes
    InitializeCommonEvent(20060012, 5300645, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060012, 5300646, 260200023); // Black Knight - Greatsword
    InitializeCommonEvent(20060012, 5300647, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060012, 5300648, 260200023); // Black Knight - Greataxe
    InitializeCommonEvent(20060012, 5300649, 260200024); // Boreal Outrider Knight
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300650, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300651, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300652, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300653, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300654, 260200025); // Archive Scholar
    InitializeCommonEvent(20060012, 5300655, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300656, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300657, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300658, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300659, 260200026); // Irithyllian Slave
    InitializeCommonEvent(20060012, 5300660, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300661, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300662, 260200027); // Lycanthrope
    InitializeCommonEvent(20060012, 5300663, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300664, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300665, 260200028); // Lycanthrope Hunter
    InitializeCommonEvent(20060012, 5300666, 260200029); // Serpent-man Summoner
    InitializeCommonEvent(20060012, 5300667, 260200030); // Serpent-man - Dagger
    InitializeCommonEvent(20060012, 5300668, 260200030); // Serpent-man - Hatchet
    InitializeCommonEvent(20060012, 5300669, 260200030); // Serpent-man - Axe
    InitializeCommonEvent(20060012, 5300670, 260200030); // Serpent-man - Double-bit Axe
    InitializeCommonEvent(20060012, 5300671, 260200031); // Giant Serpent-man - Chainaxe
    InitializeCommonEvent(20060012, 5300672, 260200031); // Giant Serpent-man - Greataxe
    InitializeCommonEvent(20060012, 5300673, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060012, 5300674, 260200032); // Silver Knight - Sword and Shield
    InitializeCommonEvent(20060012, 5300675, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300676, 260200032); // Silver Knight - Spear and Shield
    InitializeCommonEvent(20060012, 5300677, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060012, 5300678, 260200032); // Silver Knight - Greatbow
    InitializeCommonEvent(20060012, 5300679, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300680, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300681, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300682, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300683, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300684, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300685, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300686, 260200033); // Bonewheel Skeleton
    InitializeCommonEvent(20060012, 5300687, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300688, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300689, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300690, 260200034); // Undead Dog
    InitializeCommonEvent(20060012, 5300691, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300692, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300693, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300694, 260200035); // Small Undead Dog
    InitializeCommonEvent(20060012, 5300695, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060012, 5300696, 260200036); // Pontiff Knight - Curved Sword
    InitializeCommonEvent(20060012, 5300697, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060012, 5300698, 260200036); // Pontiff Knight - Scythe
    InitializeCommonEvent(20060012, 5300699, 260200037); // Monstrosity of Sin
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300700, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060012, 5300701, 260200037); // Monstrosity of Sin
    InitializeCommonEvent(20060012, 5300702, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060012, 5300703, 260200038); // Wretch - Unarmed
    InitializeCommonEvent(20060012, 5300704, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060012, 5300705, 260200038); // Wretch - Spear
    InitializeCommonEvent(20060012, 5300706, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060012, 5300707, 260200038); // Wretch - Dagger
    InitializeCommonEvent(20060012, 5300708, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300709, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300710, 260200039); // Sewer Centipede
    InitializeCommonEvent(20060012, 5300711, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300712, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300713, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300714, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300715, 260200040); // Hound-rat
    InitializeCommonEvent(20060012, 5300716, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300717, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300718, 260200041); // Writhing Rotten Flesh 
    InitializeCommonEvent(20060012, 5300719, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300720, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300721, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300722, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300723, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300724, 260200042); // Basilisk
    InitializeCommonEvent(20060012, 5300725, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060012, 5300726, 260200043); // Gargoyle - Hammer
    InitializeCommonEvent(20060012, 5300727, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060012, 5300728, 260200043); // Gargoyle - Spear
    InitializeCommonEvent(20060012, 5300729, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300730, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300731, 260200044); // Jailer
    InitializeCommonEvent(20060012, 5300732, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300733, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300734, 260200044); // Jailer Handmaid
    InitializeCommonEvent(20060012, 5300735, 260200045); // Giant Rat
    InitializeCommonEvent(20060012, 5300736, 260200045); // Giant Rat
    InitializeCommonEvent(20060012, 5300737, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300738, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300739, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300740, 260200046); // Irithyll Dog
    InitializeCommonEvent(20060012, 5300741, 260200047); // Giant Slave
    InitializeCommonEvent(20060012, 5300742, 260200048); // Demon Cleric
    InitializeCommonEvent(20060012, 5300743, 260200048); // Demon Cleric
    InitializeCommonEvent(20060012, 5300744, 260200049); // Ravenous Crystal Lizard
    InitializeCommonEvent(20060012, 5300745, 260200050); // Deep Acursed
    InitializeCommonEvent(20060012, 5300746, 260200051); // Elder Ghru
    InitializeCommonEvent(20060012, 5300747, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300748, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300749, 260200052); // Darkwraith
    
    WaitFixedTimeSeconds(1.0);
    
    InitializeCommonEvent(20060012, 5300750, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300751, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300752, 260200052); // Darkwraith
    InitializeCommonEvent(20060012, 5300753, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300754, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300755, 260200053); // Poisonhorn Bug
    InitializeCommonEvent(20060012, 5300756, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300757, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300758, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300759, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300760, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300761, 260200054); // Rock Lizard
    InitializeCommonEvent(20060012, 5300762, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300763, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300764, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300765, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300766, 260200055); // Demon Statue
    InitializeCommonEvent(20060012, 5300767, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300768, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300769, 260200056); // Fat Deacon
    InitializeCommonEvent(20060012, 5300770, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300771, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300772, 260200057); // Tall Deacon
    InitializeCommonEvent(20060012, 5300773, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300774, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300775, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300776, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300777, 260200058); // Thin Deacon
    InitializeCommonEvent(20060012, 5300778, 260200059); // Irithyll Fire Witch
    InitializeCommonEvent(20060012, 5300779, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300780, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300781, 260200060); // Ringed Knight
    InitializeCommonEvent(20060012, 5300782, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300783, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300784, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300785, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300786, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300787, 260200061); // Hollow Vagabond
    InitializeCommonEvent(20060012, 5300788, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300789, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300790, 260200062); // Hollow Cleric
    InitializeCommonEvent(20060012, 5300791, 260200063); // Harald Knight
    InitializeCommonEvent(20060012, 5300792, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300793, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300794, 260200064); // Big Locust
    InitializeCommonEvent(20060012, 5300795, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300796, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300797, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300798, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300799, 260200065); // Small Locust
    InitializeCommonEvent(20060012, 5300800, 260200019); // Cathedral Grave Warden
    InitializeCommonEvent(20060012, 5300801, 260200019); // Cathedral Grave Warden
});
