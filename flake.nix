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
            emmet-ls
            typescript
            nodePackages.pnpm
            nodePackages.typescript
            nodePackages.typescript-language-server
            nodePackages."@astrojs/language-server"
            nodePackages.vscode-langservers-extracted
            nodePackages."@tailwindcss/language-server"
          ];
        };

        formatter = nixpkgs-fmt;
      });
}
