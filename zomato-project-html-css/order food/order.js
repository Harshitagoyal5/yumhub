    // Sample restaurant data
    const restaurantData = {
      delhi: [
        { name: "Nutri 91", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D", description: "Savor the taste of wellness with our restaurant's vibrant salads" },
        { name: "Calorie Kitchen", image: "https://lh3.googleusercontent.com/p/AF1QipNbLNfFGgksKmkQ68GOeBVt_0RnU997DDb6aTuR=s1360-w1360-h1020", description: "At our grill, indulge guilt-free in lean proteins and wholesome sides, where health-conscious meets palate-pleasing." },
        { name: "Calorie Care", image: "https://lh3.googleusercontent.com/p/AF1QipPNi2TqVYcFVERCTsFPB5ja5fJBuAGO6nyd8z5P=s1360-w1360-h1020", description: "Satisfy your cravings with our nutrient-packed wraps, a perfect fusion of taste and nutrition that leaves you satisfied and revitalized" },
        { name: "Vital Foods", image: "https://lh3.googleusercontent.com/p/AF1QipNDoPxOs7MgJPJU8qFdr5oUlKv1UjfeyrQsW8Tj=s1360-w1360-h1020", description: "Delight in the rich flavors of North India, where our wholesome dal and roti showcase the perfect harmony of health and tradition" },
        { name: "Yustrength", image: "https://lh5.googleusercontent.com/p/AF1QipPeVGPQ4xqrQ5hMBRsLuL91h2RQT7-vN9TIZinF=w260-h175-n-k-no", description: "At our table, relish the purity of flavors in our North Indian salads, blending local ingredients into refreshing combinations that are as nourishing as they are delicious." },
        { name: "Feed it", image: "https://lh3.googleusercontent.com/p/AF1QipNV-tToFb73W0OzYw3p-nBRMRWtnVW4wl9H-cVc=s1360-w1360-h1020", description: "Discover a world of flavor in our Mediterranean-inspired dishes, where heart-healthy ingredients take center stage." },
        { name: "Healthy Cravings", image: "https://lh3.googleusercontent.com/p/AF1QipPhU0OdfNZx810dnr4prbDtuflf4RK1Yfl0XWM3=s1360-w1360-h1020", description: "Experience a symphony of superfoods in our bowls, a culinary masterpiece that nourishes and delights." },
        { name: "Fresh Fusion", image: "https://lh5.googleusercontent.com/p/AF1QipMKPNLknhwqjjqAUMMjHgD5OaBL3Y9jHhfPlrLO=w260-h175-n-k-no", description: "Treat yourself to guilt-free indulgence with our gluten-free and plant-based delights, crafted for both taste and well-being." },
        { name: "Greenz Ponwai", image: "https://lh5.googleusercontent.com/p/AF1QipPz4VuPw4IKGcynMWh5A0u5yJn_gDwpU1EXYoCs=w260-h175-n-k-no", description: "We serve the best delicacies, which looks mouth watering and serves stomach filling diet." },
        { name: "Nutrio Box", image: "https://lh5.googleusercontent.com/p/AF1QipPaJL-TleY5t9bwUEGoYfGytfQChyByTxB9mvyg=w260-h175-n-k-no", description: "Experience the robust taste of our regional specialties, from quinoa-infused biryanis to protein-packed lentil dishes, redefining North Indian cuisine with a health-conscious touch" },
        { name: "Healthy chef", image: "https://lh5.googleusercontent.com/p/AF1QipNuo7btPMyF81IosPh43WZfc0PZveViBliojtf1=w260-h175-n-k-no", description: "Embark on a culinary journey with our low-carb wonders, where every bite is a step towards a balanced and energized life." },
        { name: "Being Healthy Kitchen", image: "https://lh3.googleusercontent.com/p/AF1QipNH3WZHZZk1Zd-w27Xq-HacrO0-ZzETYvPmeo-b=s1360-w1360-h1020", description: "We serve the best cobiantion of non-veg and veg food ,that fulfills your daily nutrition requirment." },
        // Add more Delhi restaurants as needed
      ],
      mumbai: [
        { name: "Calorie Care", image: "https://lh3.googleusercontent.com/p/AF1QipOxhYHRLtNQPk_j8zL0szle8cMGrQeRKFJhGr3a=s1360-w1360-h1020", description: "Indulge in a guilt-free culinary experience at our restaurant, where every dish is a delicious celebration of health and flavor." },
        { name: "alible", image: "https://lh3.googleusercontent.com/p/AF1QipOQIs7-yx_txyNpO2uDd6K-feufM4eIwYwViUya=s1360-w1360-h1020", description: "Elevate workplace well-being with our restaurant's finest healthy meals, we deliver nourishment and energy to fuel your productivity." },
        { name: "Lean Meal Co.", image: "https://lh5.googleusercontent.com/p/AF1QipPtSjSJKEdLCuEqSC35TJII3t8aJVTO1YWI8wVB=w260-h175-n-k-no", description: "We expertise in serving a nutritious bowl of belly filling food, that complements your workpout." },
        { name: "Green Bean Desserts", image: "https://hips.hearstapps.com/hmg-prod/images/healthy-desserts-spiced-plum-galette-1671053036.jpg?crop=0.675xw:0.675xh;0,0.171xh&resize=980:*", description: "Elevate your day with our power-packed smoothies, blending goodness and taste for a refreshing health boost" },
        { name: "Poonam Kapurs Healthy kitchen", image: "https://lh3.googleusercontent.com/p/AF1QipNHOLsBYsUy3cV9G8cXbbUAMGZ-GoBEC4H0dHOk=s1360-w1360-h1020", description: "we serve food that tastes like Home. Freshly prepared and served." },
        { name: "BALANCED MEAL", image: "https://lh5.googleusercontent.com/p/AF1QipN0dJdT05yibHgnYpE09_t32DrmBiTWBfhj_U8y=w260-h175-n-k-no", description: "our aim is to deliver a plate that is a complete combination of all Nutrients ." },
        { name: "Planto Meals", image: "https://lh3.googleusercontent.com/p/AF1QipP7SesAU5YbdpX5zTVjfXn-H5ZOc7oaoxOlQU2Y=s1360-w1360-h1020", description: "Do you also get cravings to eat junk? Planto meal offers a substitute of unhealthy meals with the best proportion healthy meal ." },
        { name: "Fresh Fusion", image: "https://lh3.googleusercontent.com/p/AF1QipMF8O0B-HFXXv2Ly5qeNW-pdAqpNG-ccYyQ0L5o=s1360-w1360-h1020", description: "Savor the taste of wellness with our restaurant's vibrant salads, where freshness meets flavor in every crisp bite." },
        { name: "Lean Kitchen by Maya", image: "https://lh5.googleusercontent.com/p/AF1QipNWp5Za6mxXPTKBWUOyGsl1J4zxmNR4QEXmEvzA=w260-h175-n-k-no", description: "At our grill, indulge guilt-free in lean proteins and wholesome sides, where health-conscious meets palate-pleasing." },
        { name: "happyGrub ", image: "https://lh3.googleusercontent.com/p/AF1QipNrMWqidxnjmjHT_2xv3fAAL5KGWehP80RdUqRp=s1360-w1360-h1020", description: "Experience a symphony of superfoods in our bowls, a culinary masterpiece that nourishes and delights" },
        { name: "Soulful Mealz ", image: "https://lh3.googleusercontent.com/p/AF1QipM6Cbws9ykGGGCpIMAVZZSiUb69mspMTrNDaHUd=s1360-w1360-h1020", description: "Delight in the rich flavors of North India, where our wholesome dal and roti showcase the perfect harmony of health and tradition" },
        { name: "prep A meal", image: "https://lh5.googleusercontent.com/p/AF1QipO3bRY5cDdNfv3gOkVgWcZ23D1pMU-Bcg64MrZb=w260-h175-n-k-no", description: "Treat yourself to guilt-free indulgence with our gluten-free and plant-based delights, crafted for both taste and well-being." },
        { name: "Activeat", image: "https://lh3.googleusercontent.com/p/AF1QipMPkGmHDS4z5_pBO8h1pn6MRs0BX5VkgpGStHjk=s1360-w1360-h1020", description: "Embark on a culinary journey with our low-carb wonders, where every bite is a step towards a balanced and energized life." },
        // Add more Mumbai restaurants as needed
      ],
    };

    // Function to dynamically generate restaurant items
    function generateRestaurantItems(location) {
      const restaurantSection = document.getElementById("restaurant-section");
      restaurantSection.innerHTML = ''; // Clear existing content

      const restaurants = restaurantData[location];
      if (restaurants) {
        restaurants.forEach(restaurant => {
          const restaurantItem = document.createElement("div");
          restaurantItem.classList.add("restaurant-item");

          const restaurantImage = document.createElement("img");
          restaurantImage.src = restaurant.image;
          restaurantImage.alt = restaurant.name;

          const restaurantContent = document.createElement("div");
          restaurantContent.classList.add("restaurant-item-content");
          restaurantContent.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
          `;

          restaurantItem.appendChild(restaurantImage);
          restaurantItem.appendChild(restaurantContent);
          restaurantSection.appendChild(restaurantItem);
        });
      }
    }

    // Example: Generate restaurant items for Delhi initially
    generateRestaurantItems("delhi");

    // Sample function to switch between Delhi and Mumbai
    function switchLocation(location) {
      generateRestaurantItems(location);
    }


 
