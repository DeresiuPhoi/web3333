document.getElementById('calculate-btn').addEventListener('click',function(){
    var basePrice = 100;

    // education
    const education = parseFloat(document.getElementById('education').value);
    basePrice *= education;

    // family-net-worth
    const netWorth = parseFloat(document.getElementById('net-worth').value);
    basePrice *= netWorth;

    // caste(just addition)
    const caste = parseFloat(document.getElementById('caste').value);
    basePrice += caste;

    // skills
    const skills = ['instrument', 'cook', 'easygoing', 'sing'];
    let totalSkillsValue = 0;

    skills.forEach(skill => {
    const skillElement = document.getElementById(skill);
    if (skillElement.checked) {
        totalSkillsValue += parseFloat(skillElement.value);
    }
    basePrice +=totalSkillsValue;
    });

    const ageElement = document.querySelector('input[name="age"]:checked');
    if (ageElement) {
        const ageValue = parseFloat(ageElement.value);
        if (!isNaN(ageValue)) {
            basePrice *= ageValue;
        }
    } else {
    console.log("No age selected");
    }
    const gossipFactors = [
        { id: 'gossip-parents', defaultValue: 1 },
        { id: 'gossip-character', defaultValue: 1 },
        { id: 'gossip-general', defaultValue: 0 }
    ];
    
    let gossipMultipliers = 1;
    let gossipAddition = 0;
    
    gossipFactors.forEach(gossip => {
        const gossipElement = document.getElementById(gossip.id);
        const value = gossipElement.checked ? parseFloat(gossipElement.value) : gossip.defaultValue;
    
        if (gossip.id === 'gossip-general') {
            gossipAddition += value;
        } else {
            gossipMultipliers *= value;
        }
    });
    
    basePrice *= gossipMultipliers;
    basePrice += gossipAddition;
    

    // display the result
    document.getElementById('result').textContent = 'Bride/Groom Price: $' + basePrice.toFixed(2);
})