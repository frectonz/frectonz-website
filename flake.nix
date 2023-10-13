{
  description = "Nix flake for my portfolio";

  outputs =
    { self
    , nixpkgs
    , flake-utils
    }:
    flake-utils.lib.eachDefaultSystem
      (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      with pkgs; {
        devShells.default = mkShell {
          packages = [
            nodejs
            nodePackages.pnpm
            nodePackages.typescript
            nodePackages.typescript-language-server
          ];
        };

        formatter = nixpkgs-fmt;
      });
}
