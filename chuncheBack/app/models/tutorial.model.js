module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        webSearchUrl: String,
        name: String,
        thumbnailUrl: String,
        datePublished: String,
        contentUrl: String,
        hostPageUrl: String,
        contentSize: String,
        encodingFormat: String,
        hostPageDisplayUrl: String,
        width: Number,
        height: Number,
        thumbnail: {
          width: Number,
          height: Number
        },
        score: Number
      }
    );
  
    /*schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });*/
  
    const Tutorial = mongoose.model("chunche", schema);
    return Tutorial;
  };