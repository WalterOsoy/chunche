module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        image: String,
        url: String,
        name: String,
        score: Number
      }
    );
  
    /*schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });*/
  
    const Chunche = mongoose.model('chunche', schema , 'chunche');
    return Chunche;
  };