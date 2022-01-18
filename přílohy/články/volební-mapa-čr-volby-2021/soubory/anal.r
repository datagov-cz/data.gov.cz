setwd('/home/michal/dev/volby2021/mds/')
# Selected okrseks -> Dimensions (Selected districts positions)
###############################
D = read.csv('distance_matrix_7000.csv',stringsAsFactors = FALSE, header = TRUE)
Dm = data.matrix(D)
MDS = cmdscale(Dm,k=3,eig=T)
plot(MDS$points[,1],MDS$points[,2])
plot(MDS$eig)
options(scipen=999)
write.csv(MDS$points[,1:2],"coord_7000.csv")

# Dimensions (Selected districts positions) -> Parties (positions)
##############################
Xraw = read.csv('raw_matrix_7000.csv',stringsAsFactors = FALSE, header = TRUE)
Xraw[is.na(Xraw)] = 0
Xp = Xraw / apply(Xraw,1,sum)
Xps = apply(Xp,2,scale)
party = t(Xps)%*%MDS$points/sum(MDS$eig[MDS$eig>0])
plot(party[,1],party[,2])
write.csv(party,"party_coords.csv")

# Parties (positions) -> Districts (positions)
###############################
distr_raw = read.csv('districts.csv', header = T)
distr_raw[is.na(distr_raw)] = 0
distr_ps = t(apply(distr_raw,1,scale))
distr = distr_ps %*% party
plot(distr[,1],distr[,2])
write.csv(distr,"distr_coords.csv")
# rotation
pca = princomp(distr[,1:2])
distr_rot = t(t(pca$loadings) %*% t(sweep(distr[,1:2], 2, t(pca$center))))
plot(distr_rot[,1], distr_rot[,2])
write.csv(distr_rot, "distr_coords_rot.csv")

# party rotation
party_rot = t(t(pca$loadings) %*% t(apply(party[,1:2],2,scale)))
party_rot[,1] = as.double(pca$sdev[1]) * party_rot[,1]
party_rot[,2] = as.double(pca$sdev[2]) * party_rot[,2]
plot(party_rot[,1], party_rot[,2])
colnames(party_rot) = c("dim1", "dim2")
parties = cbind(read.csv('parties.csv', header=TRUE), party_rot)
write.csv(parties, 'cz_2021_party.csv')

# Parties (positions) -> Towns (positions)
###############################
towns_src = read.csv('regions5.csv', header = T)
towns_raw = towns_src[,4:dim(towns_src)[2]]
towns_ps = t(apply(towns_raw,1,scale))
towns = towns_ps %*% party
plot(towns[,1],towns[,2])
write.csv(towns,"regions5_coords.csv")
towns_rot = t(t(pca$loadings) %*% t(sweep(towns[,1:2], 2, t(pca$center))))
plot(towns_rot[,1], towns_rot[,2])
write.csv(towns_rot, "regions5_coords_rot.csv")

# Parties (positions) -> MOMC (positions)
###############################
regions_src = read.csv('regions6.csv', header = T)
regions_raw = regions_src[,6:dim(regions_src)[2]]
regions_ps = t(apply(regions_raw,1,scale))
regions = regions_ps %*% party
plot(regions[,1],regions[,2])
write.csv(regions,"regions6_coords.csv")
regions_rot = t(t(pca$loadings) %*% t(sweep(regions[,1:2], 2, t(pca$center))))
plot(regions_rot[,1], regions_rot[,2])
write.csv(regions_rot, "regions6_coords_rot.csv")

# Parties (positions) -> ORP (positions)
###############################
regions_src = read.csv('regions4.csv', header = T)
regions_raw = regions_src[,4:dim(regions_src)[2]]
regions_ps = t(apply(regions_raw,1,scale))
regions = regions_ps %*% party
plot(regions[,1],regions[,2])
write.csv(regions,"regions4_coords.csv")
regions_rot = t(t(pca$loadings) %*% t(sweep(regions[,1:2], 2, t(pca$center))))
plot(regions_rot[,1], regions_rot[,2])
write.csv(regions_rot, "regions4_coords_rot.csv")

# Parties (positions) -> Okres (positions)
###############################
regions_src = read.csv('regions3.csv', header = T)
regions_raw = regions_src[,4:dim(regions_src)[2]]
regions_ps = t(apply(regions_raw,1,scale))
regions = regions_ps %*% party
plot(regions[,1],regions[,2])
write.csv(regions,"regions3_coords.csv")
regions_rot = t(t(pca$loadings) %*% t(sweep(regions[,1:2], 2, t(pca$center))))
plot(regions_rot[,1], regions_rot[,2])
write.csv(regions_rot, "regions3_coords_rot.csv")

# Parties (positions) -> Kraj (positions)
###############################
regions_src = read.csv('regions2.csv', header = T)
regions_raw = regions_src[,3:dim(regions_src)[2]]
regions_ps = t(apply(regions_raw,1,scale))
regions = regions_ps %*% party
plot(regions[,1],regions[,2])
write.csv(regions,"regions2_coords.csv")
regions_rot = t(t(pca$loadings) %*% t(sweep(regions[,1:2], 2, t(pca$center))))
plot(regions_rot[,1], regions_rot[,2])
write.csv(regions_rot, "regions2_coords_rot.csv")


# Parties (positions) -> CZ (positions)
###############################
regions_src = read.csv('regions1.csv', header = T)
regions_raw = regions_src[,1:dim(regions_src)[2]]
regions_ps = t(apply(regions_raw,1,scale))
regions = regions_ps %*% party
plot(regions[,1],regions[,2])
write.csv(regions,"regions1_coords.csv")
regions_rot = regions[,1:2] - t(pca$center)
plot(regions_rot[,1], regions_rot[,2])
write.csv(regions_rot, "regions1_coords_rot.csv")