module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AthleteTable = await queryInterface.createTable('Athletes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date(),
      },
    });

    const SkillsTable = await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      relatedSkills: {
        allowNull: true,
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
      },
    });

    const AthleteSkillsTable = await queryInterface.createTable('AthleteSkills', {
      athleteId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      skillId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
    });

    const AthleteChampionshipsTable = await queryInterface.createTable('AthleteChampionships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      athleteId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });

    await queryInterface.addConstraint('AthleteSkills', {
      fields: ['athleteId'],
      type: 'foreign key',
      name: 'custom_fkey_athleteId_athleteSkills',
      references: {
        table: 'Athletes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('AthleteSkills', {
      fields: ['skillId'],
      type: 'foreign key',
      name: 'custom_fkey_skillId_athleteSkills',
      references: {
        table: 'Skills',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('AthleteChampionships', {
      fields: ['athleteId'],
      type: 'foreign key',
      name: 'custom_fkey_athleteId_athleteChampionships',
      references: {
        table: 'Athletes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    return { AthleteTable, SkillsTable, AthleteSkillsTable, AthleteChampionshipsTable };
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Athletes');
    await queryInterface.dropTable('Skills');
    await queryInterface.dropTable('AthleteSkills');
    await queryInterface.dropTable('AthleteChampionships');
  }
};
