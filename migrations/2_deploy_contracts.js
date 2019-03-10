var Market = artifacts.require("Market");

module.exports = function(deployer) {
  deployer.deploy(
    Market,
    "0xed9d02e382b34818e88b88a309c7fe71e65f419d", // Account one address
    "0xca843569e3427144cead5e4d5999a3d0ccf92b8e", // Account two address
    "0x0fbdc686b912d7722dc86510934589e0aaf3b55a", // Account three address
    {
      privateFor: [
        "QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=", // Account two
        "1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=", // Account three
      ],
    }
  );
};
