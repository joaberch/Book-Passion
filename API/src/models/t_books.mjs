const bookModel = (sequelize, DataTypes) => {
  return sequelize.define("t_books", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le titre ne peut pas être vide.",
        },
        notNull: {
          msg: "Le titre est une propriété obligatoire.",
        },
      },
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La catégorie ne peut pas être vide.",
        },
        notNull: {
          msg: "La catégorie est une propriété obligatoire.",
        },
      },
    },
    numberPages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le nombre de page ne peut pas être vide.",
        },
        notNull: {
          msg: "Le nombre de page est une propriété obligatoire.",
        },
      },
    },
    extract: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "L'extrait ne peut pas être vide.",
        },
        notNull: {
          msg: "L'extrait est une propriété obligatoire.",
        },
      },
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le résumé ne peut pas être vide.",
        },
        notNull: {
          msg: "Le résumé est une propriété obligatoire.",
        },
      },
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le nom de l'auteur ne peut pas être vide.",
        },
        notNull: {
          msg: "Le nom de l'auteur est une propriété obligatoire.",
        },
      },
    },
    editor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le nom de l'éditeur ne peut pas être vide.",
        },
        notNull: {
          msg: "Le nom de l'éditeur est une propriété obligatoire.",
        },
      },
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "L'année d'édition ne peut pas être vide.",
        },
        notNull: {
          msg: "L'année d'édition est une propriété obligatoire.",
        },
      },
    },
    avgRating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le lien de l'image d'illustration ne peut pas être vide.",
        },
        notNull: {
          msg: "Le lien de l'image d'illustration est une propriété obligatoire.",
        },
      },
    },
    fk_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

export { bookModel };